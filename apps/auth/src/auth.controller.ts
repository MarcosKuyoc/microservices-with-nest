import { Controller, Get, Logger } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  private logger = new Logger(AuthController.name);
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    this.logger.log('iniciando el controlador');
    return this.authService.getHello();
  }
}
