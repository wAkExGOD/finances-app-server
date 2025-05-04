import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { PrismaService } from 'src/prisma.service';
import { months } from 'src/constants/months';

type MonthlySpendingByCategory = {
  month: string;
  [categoryId: number]: number;
}[];

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
          gte: new Date(new Date().setMonth(new Date().getMonth() - 3)),
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

    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 3);

    for (
      let d = new Date(startDate);
      d <= new Date();
      d.setDate(d.getDate() + 1)
    ) {
      const dateKey = d.toISOString().split('T')[0];
      statistics[dateKey] = { date: dateKey };
      categoryIds.forEach((id) => {
        statistics[dateKey][id] = 0;
      });
    }

    purchases.forEach((purchase) => {
      const date = new Date(purchase.createdAt);
      const dateKey = date.toISOString().split('T')[0];

      if (statistics[dateKey]) {
        statistics[dateKey][purchase.categoryId] += purchase.price;
      }
    });

    const result = Object.values(statistics);

    return result;
  }

  async getMonthlySpendingByCategory(
    userId: number,
    categoryId: number,
  ): Promise<MonthlySpendingByCategory> {
    const currentDate = new Date();
    const startYear = currentDate.getFullYear();
    const startMonth = currentDate.getMonth();

    const purchases = await this.prisma.purchase.findMany({
      where: {
        categoryId,
        createdBy: userId,
        createdAt: {
          gte: new Date(startYear, startMonth - 11, 1),
          lte: new Date(startYear, startMonth + 1, 0),
        },
      },
    });

    const monthlySpending = new Array(12).fill(0) as number[];

    purchases.forEach((purchase) => {
      const purchaseDate = new Date(purchase.createdAt);
      const monthIndex =
        (purchaseDate.getFullYear() - startYear) * 12 +
        purchaseDate.getMonth() -
        startMonth +
        11;
      if (monthIndex >= 0 && monthIndex < 12) {
        monthlySpending[monthIndex] += purchase.price;
      }
    });

    const result = monthlySpending.map((amount, index) => {
      const monthOffset = index - 11;
      const year = startYear + Math.floor((startMonth + monthOffset) / 12);
      const month = new Date(
        year,
        (startMonth + monthOffset) % 12,
      ).toLocaleString('en-US', { month: 'long' });
      return { month: `${month} ${year}`, [categoryId]: amount };
    });

    return result;
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
