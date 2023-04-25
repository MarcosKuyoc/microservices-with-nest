import { Injectable } from '@nestjs/common';

@Injectable()
export class PricesService {
  getHello(): string {
    return 'Microservicio Prices';
  }
}
