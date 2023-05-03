import { Controller, Get, UseGuards } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@app/common';

@ApiTags('clients')
@Controller()
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get()
  clients(): string {
    return this.clientsService.clients();
  }
}
