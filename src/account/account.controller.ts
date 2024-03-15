import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CreateAccountDTO, GetAccountByIdDTO } from './dto';
import { AccountService } from './account.service';
import { AccessGuard } from 'src/auth/guard';
import { VerifyAccountInterceptor } from './interceptor';

@Controller('accounts')
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Post()
  createAccount(@Body() dto: CreateAccountDTO) {
    return this.accountService.createAccount(dto);
  }

  @UseGuards(AccessGuard)
  @UseInterceptors(VerifyAccountInterceptor)
  @Get('/:accountId')
  getAccount(@Param() dto: GetAccountByIdDTO) {
    return this.accountService.getAccountById(dto);
  }
}
