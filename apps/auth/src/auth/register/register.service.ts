import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { CreateRegisterDto } from './dto/create-register.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users, UsersDocument } from './shemas/users.schema';

@Injectable()
export class RegisterService {
  constructor(
    @InjectModel(Users.name) private userRepository: Model<UsersDocument>,
  ) {}

  async register(registerAuthDto: CreateRegisterDto): Promise<any> {
    const { password } = registerAuthDto;
    const plaintToHash = await hash(password, 10);
    registerAuthDto = { ...registerAuthDto, password: plaintToHash };

    return await this.userRepository.create(registerAuthDto);
  }
}
