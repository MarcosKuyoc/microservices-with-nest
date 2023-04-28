import { NestFactory } from '@nestjs/core';
import { BillingModule } from './billing.module';
import { RmqService } from '@app/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(BillingModule);
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('API Rest para control de clientes')
    .setDescription('Control de clientes')
    .setVersion('1.0.0')
    .addTag('billings')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('BILLING'));
  await app.startAllMicroservices();
  //await app.listen(3000);
}
bootstrap();
