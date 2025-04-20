import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/types';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
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
    const payload = { email: user.email, id: +user.id };
    const userInfo = await this.getProfileByEmail(user.email);

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

    return await this.login({
      ...createdUser,
      id: `${createdUser.id}`,
    });
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
    };
  }
}
