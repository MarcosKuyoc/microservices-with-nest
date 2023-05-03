import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { BuyDto } from './dto/buy.dto';
import { BuyOutput } from './interfaces/buy.ouput';
import { AuthGuard } from '@app/common';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getHello(): string {
    return this.productsService.getHello();
  }

  @ApiBearerAuth()
  @Post()
  @UseGuards(AuthGuard)
  async buy(@Body() products: BuyDto): Promise<BuyOutput> {
    const newBuy = await this.productsService.buy(products);
    return newBuy;
  }
}
