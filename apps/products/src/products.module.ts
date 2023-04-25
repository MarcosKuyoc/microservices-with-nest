import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { AuthorizationModule } from 'apps/share/authorization/authorization.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), AuthorizationModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
