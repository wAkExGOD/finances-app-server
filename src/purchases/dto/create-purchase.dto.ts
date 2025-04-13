import { IsString, IsNumber } from 'class-validator';

export class CreatePurchaseDto {
  @IsString()
  name: string;

  @IsNumber()
  categoryId: number;

  @IsNumber()
  price: number;
}
