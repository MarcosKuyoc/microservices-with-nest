import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ClientProxy } from '@nestjs/microservices';
//import { RmqService } from '@app/common/rmq/rmq.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './dto/create.order.dto';
import { BILLING_SERVICE } from './keys/service';
import { OrderOuput } from './interfaces/order.output';
//import { AuthorizationGuard } from 'apps/shared/authorization/authorization.guard';

@Controller()
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
    @Inject(BILLING_SERVICE) private billingClient: ClientProxy,
  ) {}

  @Get('healtCheck')
  healtCheck(): string {
    return this.ordersService.healtCheck();
  }

  @ApiTags('orders')
  @ApiBearerAuth()
  @Post()
  async orders(@Body() payload: CreateOrderDto): Promise<OrderOuput> {
    const newOrder = await this.ordersService.orders(payload);
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
