import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
// import { BuyOutput } from './interfaces/buy.ouput';
import { ApiBearerAuth } from '@nestjs/swagger';
//import { AuthorizationGuard } from 'apps/shared/authorization/authorization.guard';
import { BuyDto } from './dto/buy.dto';
import { BuyOutput } from './interfaces/buy.ouput';
// import { BuyDto } from './dto/buy.dto';
// import { ClientProxy } from '@nestjs/microservices';
// import { ORDER_SERVICE } from '../keys/services';
//import { AuthorizationGuard } from 'apps/shared/authorization/authorization.guard';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getHello(): string {
    return this.productsService.getHello();
  }

  @ApiBearerAuth()
  //@UseGuards(AuthorizationGuard)
  @Post('buy')
  async buy(@Body() products: BuyDto): Promise<BuyOutput> {
    const newBuy = await this.productsService.buy(products);
    return newBuy;
  }
}
