import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ClientProxy } from '@nestjs/microservices';
//import { RmqService } from '@app/common/rmq/rmq.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { BILLING_SERVICE } from './keys/service';
import { OrderOuput } from './interfaces/order.output';
import { UpdateOrderDto } from './dto/update.order.dto';
import { AuthGuard } from '@app/common';

@Controller()
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
    @Inject(BILLING_SERVICE) private billingClient: ClientProxy,
  ) {}

  @Get()
  healtCheck(): string {
    return this.ordersService.healtCheck();
  }

  @ApiTags('orders')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Patch('purchase/:purchaseId/product')
  async addProductToCart(
    @Param('purchaseId') purchaseId: string,
    @Body() updateCreateDto: UpdateOrderDto,
  ): Promise<OrderOuput> {
    const newOrder = await this.ordersService.addProductToCart(
      purchaseId,
      updateCreateDto,
    );
    this.billingClient.emit('order_created', newOrder);
    return newOrder;
  }

  // @EventPattern('buy_created')
  // //@UseGuards(AuthorizationGuard)
  // async handleBuyCreated(@Payload() data: any, @Ctx() context: RmqContext) {
  //   console.log('handleBuyCreated');
  //   this.ordersService.orders(data);
  //   this.rmqService.ack(context);
  // }
}
