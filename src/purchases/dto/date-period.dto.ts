import { IsDate } from 'class-validator';

export class DatePeriodDto {
  @IsDate()
  startDate: string;

  @IsDate()
  endDate: string;
}
