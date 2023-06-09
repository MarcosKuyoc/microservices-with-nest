import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { expressJwtSecret } from 'jwks-rsa';
import { promisify } from 'util';
import * as jwt from 'express-jwt';
import { AUTH0_AUDIENCE, AUTH0_CLIENT_URL } from './auth0';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.getArgByIndex(0);
    const res = context.getArgByIndex(1);

    const checkJwt = promisify(
      jwt({
        secret: expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: `${AUTH0_CLIENT_URL}.well-known/jwks.json`,
        }),
        audience: AUTH0_AUDIENCE,
        issuer: AUTH0_CLIENT_URL,
        algorithms: ['RS256'],
      }),
    );

    try {
      await checkJwt(req, res);
      return true;
    } catch (error) {
      console.log(error.message);
      throw new HttpException('API not available', HttpStatus.UNAUTHORIZED);
    }
  }
}
