import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientsService {
  clients(): string {
    return 'Lista de clientes';
  }
}
