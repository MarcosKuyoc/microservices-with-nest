import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientsService {
  getHello(): string {
    return 'Microservicio Clients';
  }
}
