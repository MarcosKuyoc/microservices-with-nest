import { NestFactory } from '@nestjs/core';
import { OrdersModule } from './orders.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(OrdersModule);
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('API Rest para control de Ordenes')
    .setDescription('Control de Ordenes')
    .setVersion('1.0.0')
    .addTag('orders')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
}
bootstrap();
