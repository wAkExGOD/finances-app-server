import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Request,
  UseGuards,
  ValidationPipe,
  UsePipes,
  Patch,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { RequestWithUser } from 'src/types';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { FindOneParams } from './dto/find-one-params.dto';
import { DatePeriodDto } from './dto/date-period.dto';

@Controller('purchases')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll(
    @Request() req: RequestWithUser,
    @Query('filter') filter: string,
    @Query('sortBy') sortBy: 'price' | 'createdAt' = 'createdAt',
    @Query('order') order: 'asc' | 'desc' = 'desc',
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('pageSize', ParseIntPipe) pageSize: number = 10,
  ) {
    return this.purchasesService.getAll(
      +req.user.id,
      filter,
      sortBy,
      order,
      page,
      pageSize,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get('statistics/daily')
  async getStatistics(@Request() req: RequestWithUser) {
    return this.purchasesService.getDailyStatistics(+req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('statistics/category/:id')
  async getMonthlySpendingByCategory(
    @Request() req: RequestWithUser,
    @Param() params: FindOneParams,
  ) {
    return this.purchasesService.getMonthlySpendingByCategory(
      +req.user.id,
      +params.id,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Post('statistics/for-period')
  async getSpendingStatsForPeriod(
    @Request() req: RequestWithUser,
    @Body() datePeriodDto: DatePeriodDto,
  ) {
    return this.purchasesService.getSpendingStatsForPeriod(
      +req.user.id,
      datePeriodDto.startDate,
      datePeriodDto.endDate,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getOne(
    @Request() req: RequestWithUser,
    @Param() params: FindOneParams,
  ) {
    return this.purchasesService.getOne(+req.user.id, +params.id);
  }

  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @Post()
  async create(
    @Request() req: RequestWithUser,
    @Body() createPurchaseDto: CreatePurchaseDto,
  ) {
    return this.purchasesService.create(+req.user.id, createPurchaseDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(
    @Request() req: RequestWithUser,
    @Param() params: FindOneParams,
  ) {
    return this.purchasesService.remove(+req.user.id, +params.id);
  }

  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @Patch(':id')
  async update(
    @Request() req: RequestWithUser,
    @Param() params: FindOneParams,
    @Body() updatePurchaseDto: UpdatePurchaseDto,
  ) {
    return this.purchasesService.update(
      +req.user.id,
      +params.id,
      updatePurchaseDto,
    );
  }
}
