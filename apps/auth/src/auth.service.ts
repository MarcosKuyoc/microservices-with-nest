import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AuthService {
  private logger = new Logger(AuthService.name);

  getHello(): string {
    this.logger.log('welcome to app');
    return 'Hello World!';
  }
}
