import { Controller, Get } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
//import { AuthorizationGuard } from 'apps/shared/authorization/authorization.guard';

@ApiTags('clients')
@Controller()
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @ApiBearerAuth()
  //@UseGuards(AuthorizationGuard)
  @Get()
  clients(): string {
    return this.clientsService.clients();
  }
}
