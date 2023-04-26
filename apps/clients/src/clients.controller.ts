import { Controller, Get, UseGuards } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { AuthorizationGuard } from '../../share/authorization/authorization.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('clients')
@Controller()
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  getHello(): string {
    return this.clientsService.getHello();
  }

  @ApiBearerAuth()
  @UseGuards(AuthorizationGuard)
  @Get('/clients')
  clients(): string {
    return this.clientsService.clients();
  }
}
