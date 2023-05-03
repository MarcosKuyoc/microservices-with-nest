import { Injectable } from '@nestjs/common';
import { OrderOuput } from './interfaces/order.output';
import { UpdateOrderDto } from './dto/update.order.dto';

@Injectable()
export class OrdersService {
  healtCheck(): string {
    return 'Hello Orders!';
  }

  async addProductToCart(
    purchaseId: string,
    data: UpdateOrderDto,
  ): Promise<OrderOuput> {
    console.log(purchaseId);
    console.log(data);
    return Promise.resolve({
      data: `La orden con id:${purchaseId}  se ha creado!`,
    });
  }
}
