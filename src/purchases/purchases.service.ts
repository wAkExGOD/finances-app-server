import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { PrismaService } from 'src/prisma.service';
import { months } from 'src/constants/months';

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

  async getDailyStatistics(userId: number) {
    const purchases = await this.prisma.purchase.findMany({
      where: {
        createdBy: userId,
        createdAt: {
          gte: new Date(new Date().setMonth(new Date().getMonth() - 3)), // Получаем данные за последние 3 месяца
        },
      },
      select: {
        price: true,
        createdAt: true,
        categoryId: true,
      },
    });

    const statistics: {
      [dateKey: string]: { date: string; [categoryId: number]: number };
    } = {};

    const categories = await this.prisma.purchaseCategory.findMany({
      select: { id: true },
    });

    const categoryIds = categories.map((category) => category.id);

    // Заполняем статистику для каждого дня за последние 3 месяца
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 3);

    for (
      let d = new Date(startDate);
      d <= new Date();
      d.setDate(d.getDate() + 1)
    ) {
      const dateKey = d.toISOString().split('T')[0]; // Формат YYYY-MM-DD
      statistics[dateKey] = { date: dateKey };
      categoryIds.forEach((id) => {
        statistics[dateKey][id] = 0;
      });
    }

    purchases.forEach((purchase) => {
      const date = new Date(purchase.createdAt);
      const dateKey = date.toISOString().split('T')[0]; // Формат YYYY-MM-DD

      if (statistics[dateKey]) {
        statistics[dateKey][purchase.categoryId] += purchase.price;
      }
    });

    const result = Object.values(statistics);

    return result;
  }

  // async getMonthlyStatistics(userId: number) {
  //   const purchases = await this.prisma.purchase.findMany({
  //     where: {
  //       createdBy: userId,
  //     },
  //     select: {
  //       price: true,
  //       createdAt: true,
  //       categoryId: true,
  //     },
  //   });

  //   const statistics: {
  //     [monthKey: string]: { month: string; [categoryId: number]: number };
  //   } = {};

  //   const categories = await this.prisma.purchaseCategory.findMany({
  //     select: { id: true },
  //   });

  //   const categoryIds = categories.map((category) => category.id);

  //   months.forEach((month, index) => {
  //     const yearMonth = `${new Date().getFullYear()}-${index + 1}`;
  //     statistics[yearMonth] = { month };
  //     categoryIds.forEach((id) => {
  //       statistics[yearMonth][id] = 0;
  //     });
  //   });

  //   purchases.forEach((purchase) => {
  //     const date = new Date(purchase.createdAt);
  //     const yearMonth = `${date.getFullYear()}-${date.getMonth() + 1}`;

  //     statistics[yearMonth][purchase.categoryId] += purchase.price;
  //   });

  //   const result = Object.values(statistics);

  //   return result;
  // }

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
