import { Controller, Get, UseGuards } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { AuthorizationGuard } from '../../share/authorization/authorization.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller()
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @ApiBearerAuth()
  @UseGuards(AuthorizationGuard)
  @Get()
  getHello(): string {
    return this.clientsService.getHello();
  }
}
