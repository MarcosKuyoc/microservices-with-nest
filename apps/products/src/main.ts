import { NestFactory } from '@nestjs/core';
import { ProductsModule } from './products.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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
  await app.listen(3003);
}
bootstrap();
