import { Module } from '@nestjs/common';
import { PricesController } from './prices.controller';
import { PricesService } from './prices.service';
import { AuthorizationModule } from 'apps/share/authorization/authorization.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), AuthorizationModule],
  controllers: [PricesController],
  providers: [PricesService],
})
export class PricesModule {}
