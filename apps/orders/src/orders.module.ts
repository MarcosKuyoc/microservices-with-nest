import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { RmqModule } from '@app/common/rmq/rmq.module';
import { BILLING_SERVICE } from './keys/service';
import { AuthModule } from '@app/common';
//import { AuthorizationModule } from 'apps/shared/authorization/authorization.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.string().required(),
        TZ: Joi.string().required(),
        MONGODB_URI: Joi.string().required(),
        AUTH0_CLIENT_URL: Joi.string().required(),
        AUTH0_AUDIENCE: Joi.string().required(),
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_ORDER_QUEUE: Joi.string().required(),
        RABBIT_MQ_BILLING_QUEUE: Joi.string().required(),
      }),
      envFilePath: './apps/orders/.env',
    }),
    RmqModule.register({
      name: BILLING_SERVICE,
    }),
    AuthModule,
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
