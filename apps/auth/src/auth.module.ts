import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { URL_MONGO } from '../keys/db.keys';
import { RegisterModule } from './auth/register/register.module';
import { LoginModule } from './auth/login/login.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(URL_MONGO),
    RegisterModule,
    LoginModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
