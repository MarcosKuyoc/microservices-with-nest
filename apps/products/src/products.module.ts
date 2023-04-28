import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { CreateModule } from './create/create.module';
import * as Joi from 'joi';
//import { ORDER_SERVICE } from '../keys/services';
//import { AuthorizationModule } from 'apps/shared/authorization/authorization.module';
import { ORDER_SERVICE } from '../keys/services';
import { RmqModule } from '@app/common/rmq/rmq.module';
//import { AuthorizationModule } from 'apps/shared/authorization/authorization.module';
//import { RmqModule } from '@app/common';
//import { RmqModule } from '@app/common';

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
      }),
      envFilePath: './apps/products/.env',
    }),
    RmqModule.register({
      name: ORDER_SERVICE,
    }),
    CreateModule,
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
