import { Controller, Get, UseGuards } from '@nestjs/common';
import { BillingService } from './billing.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard, RmqService } from '@app/common';

@ApiTags('billings')
@Controller()
export class BillingController {
  constructor(
    private readonly billingService: BillingService,
    private readonly rmqService: RmqService,
  ) {}

  @Get()
  healtCheck(): string {
    return this.billingService.healtCheck();
  }

  @EventPattern('order_created')
  @UseGuards(AuthGuard)
  async handleOrderCreated(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log('handleBuyCreated');
    this.billingService.billing(data);
    this.rmqService.ack(context);
  }
}
