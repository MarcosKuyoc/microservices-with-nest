import { NestFactory } from '@nestjs/core';
import { ProductsModule } from './products.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
// import { RmqService } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(ProductsModule);
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('API Rest para control de productos')
    .setDescription('Control de productos')
    .setVersion('1.0.0')
    .addTag('products')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
}
bootstrap();
