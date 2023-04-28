import { Injectable } from '@nestjs/common';
import { OrderOuput } from './interfaces/order.output';
import { CreateOrderDto } from './dto/create.order.dto';

@Injectable()
export class OrdersService {
  healtCheck(): string {
    return 'Hello Orders!';
  }

  orders(data: CreateOrderDto): Promise<OrderOuput> {
    console.log(data);
    return Promise.resolve({ data: 'La orden se ha creado!' });
  }
}
