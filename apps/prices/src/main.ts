import { NestFactory } from '@nestjs/core';
import { PricesModule } from './prices.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(PricesModule);
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('API Rest para control de precios')
    .setDescription('Control de precios')
    .setVersion('1.0.0')
    .addTag('prices')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3002);
}
bootstrap();
