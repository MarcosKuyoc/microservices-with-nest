import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  orders(): string {
    return 'Lista de ordenes!';
  }
}
