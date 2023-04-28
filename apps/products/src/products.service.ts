import { Injectable } from '@nestjs/common';
import { BuyDto } from './dto/buy.dto';
import { BuyOutput } from './interfaces/buy.ouput';

@Injectable()
export class ProductsService {
  getHello(): string {
    return 'hello';
  }

  async buy(products: BuyDto): Promise<BuyOutput> {
    console.log('Se guarda la compra');
    return products;
  }
}
