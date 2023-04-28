import { Test, TestingModule } from '@nestjs/testing';
import { CreateController } from './create.controller';
import { CreateService } from './create.service';

describe('CreateController', () => {
  let controller: CreateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateController],
      providers: [CreateService],
    }).compile();

    controller = module.get<CreateController>(CreateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
