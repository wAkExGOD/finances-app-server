import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PurchasesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(userId: number) {
    return this.prisma.purchase.findMany({
      where: { createdBy: userId },
      include: { category: true },
    });
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

    await this.prisma.purchase.update({
      where: {
        id: purchaseId,
        createdBy: userId,
      },
      data: updatePurchaseDto,
    });

    return { success: true };
  }
}
