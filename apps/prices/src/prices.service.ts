import { Injectable } from '@nestjs/common';

@Injectable()
export class PricesService {
  prices(): string {
    return 'Lista de precios';
  }
}
