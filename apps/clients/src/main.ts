import { NestFactory } from '@nestjs/core';
import { ClientsModule } from './clients.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(ClientsModule);
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('API Rest para control de clientes')
    .setDescription('Control de clientes')
    .setVersion('1.0.0')
    .addTag('clients')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
}
bootstrap();
