import { Controller, Get } from '@nestjs/common';
import { PricesService } from './prices.service';
import { ApiBearerAuth } from '@nestjs/swagger';
//import { AuthorizationGuard } from 'apps/shared/authorization/authorization.guard';

@Controller()
export class PricesController {
  constructor(private readonly pricesService: PricesService) {}

  @ApiBearerAuth()
  //@UseGuards(AuthorizationGuard)
  @Get()
  prices(): string {
    return this.pricesService.prices();
  }
}
