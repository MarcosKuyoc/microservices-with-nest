import { Controller, Get, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { AuthorizationGuard } from 'apps/share/authorization/authorization.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiBearerAuth()
  @UseGuards(AuthorizationGuard)
  @Get()
  getHello(): string {
    return this.productsService.getHello();
  }
}
