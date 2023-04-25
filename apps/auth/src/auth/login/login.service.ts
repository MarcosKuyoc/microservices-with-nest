import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { HttpService } from '@nestjs/axios';
import { Users, UsersDocument } from '../register/shemas/users.schema';
import { Model } from 'mongoose';
import { compare } from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { map, catchError, lastValueFrom } from 'rxjs';
import { UserOuput } from './interfaces/user.ouput';

@Injectable()
export class LoginService {
  constructor(
    @InjectModel(Users.name) private userRepository: Model<UsersDocument>,
    private readonly httpService: HttpService,
  ) {}

  async login(loginAuthDto: LoginDto): Promise<UserOuput> {
    try {
      const { email, password } = loginAuthDto;
      const user = await this.userRepository.findOne({ email });

      if (!user)
        throw new HttpException('USER_NOT_FOUNT', HttpStatus.NOT_FOUND);

      const checkPasswort = await compare(password, user.password);

      if (!checkPasswort)
        throw new HttpException('PASSWORD_INCORRECT', HttpStatus.FORBIDDEN);

      const request = this.httpService
        .post(
          `${process.env.AUTH0_CLIENT_URL}`,
          `{"client_id":"${process.env.AUTH0_CLIENT_ID}","client_secret":"${process.env.AUTH0_CLIENT_SECRET}","audience":"next-auth-api","grant_type":"client_credentials"}`,
          { headers: { 'content-type': 'application/json' } },
        )
        .pipe(
          map((res) => {
            return res.data?.access_token;
          }),
        )
        .pipe(
          catchError(() => {
            throw new HttpException(
              'API not available',
              HttpStatus.UNAUTHORIZED,
            );
          }),
        );

      const token = await lastValueFrom(request);
      const response = Object.assign({
        user,
        token,
      });

      return response;
    } catch (err) {
      console.log(err.response);
      throw err;
    }
  }
}
