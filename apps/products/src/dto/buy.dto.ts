import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class BuyDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber({}, { each: true })
  products: number[];
}
