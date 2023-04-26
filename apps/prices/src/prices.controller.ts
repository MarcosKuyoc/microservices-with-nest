import { Controller, Get, UseGuards } from '@nestjs/common';
import { PricesService } from './prices.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthorizationGuard } from 'apps/share/authorization/authorization.guard';

@Controller()
export class PricesController {
  constructor(private readonly pricesService: PricesService) {}

  @ApiBearerAuth()
  @UseGuards(AuthorizationGuard)
  @Get()
  prices(): string {
    return this.pricesService.prices();
  }
}
