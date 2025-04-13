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
} from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { RequestWithUser } from 'src/types';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('purchases')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll(@Request() req: RequestWithUser) {
    return this.purchasesService.getAll(+req.user.id);
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
  async remove(@Request() req: RequestWithUser, @Param('id') id: number) {
    return this.purchasesService.remove(+req.user.id, id);
  }

  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @Patch(':id')
  async update(
    @Request() req: RequestWithUser,
    @Param('id') id: number,
    @Body() updatePurchaseDto: UpdatePurchaseDto,
  ) {
    return this.purchasesService.update(+req.user.id, +id, updatePurchaseDto);
  }
}
