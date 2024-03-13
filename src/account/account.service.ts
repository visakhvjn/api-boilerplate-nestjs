import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAccountDTO, GetAccountDTO } from './dto';
import * as argon2 from 'argon2';

@Injectable()
export class AccountService {
  constructor(private prismaService: PrismaService) {}

  async createAccount(dto: CreateAccountDTO) {
    const hash = await argon2.hash(dto.password);
    const user = await this.prismaService.account.create({
      data: {
        email: dto.email,
        hash: hash,
        firstName: dto.firstName,
        lastName: dto.lastName,
      },
    });

    delete user.hash;

    return user;
  }

  async getAccount(dto: GetAccountDTO) {
    const user = await this.prismaService.account.findFirst({
      where: {
        id: dto.id,
      },
    });

    delete user.hash;

    return user;
  }
}
