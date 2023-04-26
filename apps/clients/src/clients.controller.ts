import { Controller, Get, UseGuards } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { AuthorizationGuard } from '../../share/authorization/authorization.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('clients')
@Controller()
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @ApiBearerAuth()
  @UseGuards(AuthorizationGuard)
  @Get()
  clients(): string {
    return this.clientsService.clients();
  }
}
