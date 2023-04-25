import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { AuthorizationModule } from '../../share/authorization/authorization.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), AuthorizationModule],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}
