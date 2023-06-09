import { NestFactory } from '@nestjs/core';
import { PricesModule } from './prices.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

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
  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
}
bootstrap();
