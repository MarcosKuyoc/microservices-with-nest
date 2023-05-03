import { Controller, Post, Body } from '@nestjs/common';
import { CreateService } from './create.service';
import { CreateCreateDto } from './dto/create-create.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('create')
export class CreateController {
  constructor(private readonly createService: CreateService) {}

  @ApiBearerAuth()
  @Post()
  async create(@Body() createCreateDto: CreateCreateDto) {
    const product = await this.createService.create(createCreateDto);
    console.log(product);
    // emitir el producto
  }

  // @Get()
  // findAll() {
  //   return this.createService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.createService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCreateDto: UpdateCreateDto) {
  //   return this.createService.update(+id, updateCreateDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.createService.remove(+id);
  // }
}
