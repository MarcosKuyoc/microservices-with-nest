import { Controller, Get, UseGuards } from '@nestjs/common';
import { PricesService } from './prices.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@app/common';

@Controller()
export class PricesController {
  constructor(private readonly pricesService: PricesService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get()
  prices(): string {
    return this.pricesService.prices();
  }
}
