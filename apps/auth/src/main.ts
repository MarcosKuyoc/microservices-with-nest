import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { Logger } from 'nestjs-pino';
//import tracer from './tracer';

async function bootstrap() {
  //await tracer.start();
  const app = await NestFactory.create(AuthModule);
  app.useLogger(app.get(Logger));
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('API Rest para control de usuarios usando AUTH0')
    .setDescription('Control de usuarios de la aplicación')
    .setVersion('1.0.0')
    .addTag('auth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
}
bootstrap();
