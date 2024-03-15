import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JWTPayloadDTO, JWTResponseDTO } from './types';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  signToken(dto: JWTPayloadDTO): JWTResponseDTO {
    const JWT_ACCESS_TOKEN_SECRET = this.configService.get(
      'JWT_ACCESS_TOKEN_SECRET',
    );
    const JWT_ACCESS_TOKEN_EXPIRES_IN = this.configService.get(
      'JWT_ACCESS_TOKEN_EXPIRES_IN',
    );

    const payload = {
      sub: dto.accountId,
      email: dto.email,
    };

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: JWT_ACCESS_TOKEN_EXPIRES_IN,
      secret: JWT_ACCESS_TOKEN_SECRET,
    });

    return { accessToken };
  }
}
