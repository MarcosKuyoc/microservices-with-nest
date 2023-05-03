import { Module } from '@nestjs/common';
import { CreateService } from './create.service';
import { CreateController } from './create.controller';

@Module({
  controllers: [CreateController],
  providers: [CreateService],
})
export class CreateModule {}
