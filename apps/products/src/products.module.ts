import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { AuthorizationModule } from 'apps/share/authorization/authorization.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

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
      envFilePath: './apps/products/.env',
    }),
    AuthorizationModule,
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
