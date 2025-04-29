import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PurchasesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(
    userId: number,
    filter: string,
    sortBy: string,
    order: 'asc' | 'desc',
  ) {
    const purchases = await this.prisma.purchase.findMany({
      where: {
        createdBy: userId,
        name: {
          contains: filter,
          mode: 'insensitive',
        },
      },
      include: { category: true },
      orderBy: {
        [sortBy]: order,
      },
    });

    return purchases;
  }

  async getOne(userId: number, id: number) {
    const purchase = await this.prisma.purchase.findUnique({
      where: { createdBy: userId, id },
      include: { category: true },
    });

    if (!purchase) {
      throw new NotFoundException('Purchase not found');
    }

    return purchase;
  }

  async create(userId: number, createPurchaseDto: CreatePurchaseDto) {
    const category = await this.prisma.purchaseCategory.findUnique({
      where: { id: createPurchaseDto.categoryId },
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return this.prisma.purchase.create({
      data: {
        ...createPurchaseDto,
        createdBy: userId,
      },
      include: { category: true },
    });
  }

  async remove(userId: number, purchaseId: number) {
    const purchase = await this.prisma.purchase.delete({
      where: {
        id: purchaseId,
        createdBy: userId,
      },
    });

    if (!purchase) {
      throw new NotFoundException('Purchase not found');
    }

    return { success: true };
  }

  async update(
    userId: number,
    purchaseId: number,
    updatePurchaseDto: UpdatePurchaseDto,
  ) {
    const purchase = await this.prisma.purchase.findUnique({
      where: {
        id: purchaseId,
      },
    });

    if (!purchase) {
      throw new NotFoundException('Purchase not found');
    }

    return await this.prisma.purchase.update({
      where: {
        id: purchaseId,
        createdBy: userId,
      },
      data: updatePurchaseDto,
      include: { category: true },
    });
  }
}
