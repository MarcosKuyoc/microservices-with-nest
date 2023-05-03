import { Module } from '@nestjs/common';
import { PricesController } from './prices.controller';
import { PricesService } from './prices.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AuthModule } from '@app/common';
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
      }),
      envFilePath: './apps/prices/.env',
    }),
    AuthModule,
  ],
  controllers: [PricesController],
  providers: [PricesService],
})
export class PricesModule {}
