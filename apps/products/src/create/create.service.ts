import { Injectable } from '@nestjs/common';
import { CreateCreateDto } from './dto/create-create.dto';
// import { UpdateCreateDto } from './dto/update-create.dto';

@Injectable()
export class CreateService {
  async create(createCreateDto: CreateCreateDto) {
    try {
      console.log(createCreateDto);
    } catch (error) {
      throw error;
    }
  }

  // findAll() {
  //   return `This action returns all create`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} create`;
  // }

  // update(id: number, updateCreateDto: UpdateCreateDto) {
  //   return `This action updates a #${id} create`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} create`;
  // }
}
