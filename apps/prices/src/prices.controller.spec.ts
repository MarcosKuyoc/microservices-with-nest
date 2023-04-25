import { Test, TestingModule } from '@nestjs/testing';
import { PricesController } from './prices.controller';
import { PricesService } from './prices.service';

describe('PricesController', () => {
  let pricesController: PricesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PricesController],
      providers: [PricesService],
    }).compile();

    pricesController = app.get<PricesController>(PricesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(pricesController.getHello()).toBe('Hello World!');
    });
  });
});
