import { Module } from '@nestjs/common';
import { CreateService } from './create.service';
import { CreateController } from './create.controller';
//import { AuthorizationModule } from 'apps/shared/authorization/authorization.module';

@Module({
  controllers: [CreateController],
  providers: [CreateService],
})
export class CreateModule {}
