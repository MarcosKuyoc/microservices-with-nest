import { PartialType } from '@nestjs/mapped-types';
import { CreateCreateDto } from './create-create.dto';

export class UpdateCreateDto extends PartialType(CreateCreateDto) {}
