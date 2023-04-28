import { Controller, Get } from '@nestjs/common';
import { BillingService } from './billing.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('billings')
@Controller()
export class BillingController {
  ordersService: any;
  rmqService: any;
  constructor(private readonly billingService: BillingService) {}

  @Get('healtCheck')
  healtCheck(): string {
    return this.billingService.healtCheck();
  }

  @EventPattern('order_created')
  //@UseGuards(AuthorizationGuard)
  async handleOrderCreated(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log('handleBuyCreated');
    this.billingService.billing(data);
    this.rmqService.ack(context);
  }
}
