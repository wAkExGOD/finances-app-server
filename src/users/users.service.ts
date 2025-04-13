import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return await this.prisma.user.create({
      data: {
        email: createUserDto.email,
        password: createUserDto.password,
      },
    });
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOneById(id: number) {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async findOneByEmail(email: string) {
    return await this.prisma.user.findUnique({ where: { email } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user (${updateUserDto.email})`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
