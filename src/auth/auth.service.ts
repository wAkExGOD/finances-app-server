import * as argon2 from 'argon2';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';

import { UsersService } from 'src/users/users.service';
import { EmailService } from 'src/email/email.service';
import { User } from 'src/types';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';
import { ConfigService } from '@nestjs/config';
import { generateRandomString } from 'src/utils';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
    private readonly usersService: UsersService,
    private readonly emailService: EmailService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findOneByEmail(email);
    if (!user) {
      throw new BadRequestException('User not found');
    }

    const isMatch = await argon2.verify(user.password, password);

    if (!isMatch) {
      throw new BadRequestException('Password does not match');
    }

    return user;
  }

  async login(user: User) {
    const payload = { email: user.email, id: user.id };
    const userInfo = await this.getProfileByEmail(user.email);
    if (!userInfo.verified) {
      throw new ForbiddenException('First verify your email please');
    }

    return {
      user: userInfo,
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(user: CreateUserDto) {
    const existingUser = await this.usersService.findOneByEmail(user.email);
    if (existingUser) {
      throw new BadRequestException('Email already exists');
    }

    const createdUser = await this.usersService.create({
      email: user.email,
      password: await argon2.hash(user.password),
    });

    const confirmToken = generateRandomString(String(createdUser.id));

    await this.prisma.confirmEmailTokens.create({
      data: {
        userId: createdUser.id,
        token: confirmToken,
      },
    });

    await this.emailService.sendEmail({
      recipients: [createdUser.email],
      subject: 'Email confirmation',
      html: `
        <div>
          <h1>Confirm Your Email Address</h1>
          <p>Thank you for registering! Please confirm your email address by clicking the link below:</p>
          <a href="${this.configService.get('API_URL')}/auth/confirm/${confirmToken}">Confirm Email</a>
          <p>If you did not register, please ignore this email.</p>
        </div>
      `,
    });

    return {
      success: true,
      message: 'Email with a link to confirm your email has been sent',
    };
  }

  async getProfileByEmail(email: User['email']) {
    const userInfo = await this.usersService.findOneByEmail(email);
    if (!userInfo) {
      throw new BadRequestException("Can't find user");
    }

    return {
      id: userInfo.id,
      email: userInfo.email,
      createdAt: userInfo.createdAt,
      verified: userInfo.verified,
    };
  }

  async confirmEmail(token: string, res: Response) {
    console.log({ token });
    const userToken = await this.prisma.confirmEmailTokens.findUnique({
      where: {
        token: token,
      },
    });

    if (!userToken) {
      throw new BadRequestException();
    }

    await this.usersService.verify(userToken.userId);

    await this.prisma.confirmEmailTokens.delete({
      where: {
        userId: userToken.userId,
      },
    });

    return res
      .status(302)
      .redirect(this.configService.get('CLIENT_URL') as string);
  }
}
