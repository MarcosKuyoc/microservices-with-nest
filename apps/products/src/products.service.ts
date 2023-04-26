import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  products(): string {
    return 'Lista de productos';
  }
}
