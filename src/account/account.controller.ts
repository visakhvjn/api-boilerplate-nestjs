import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateAccountDTO, GetAccountDTO } from './dto';
import { AccountService } from './account.service';

@Controller('accounts')
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Post()
  createAccount(@Body() dto: CreateAccountDTO) {
    return this.accountService.createAccount(dto);
  }

  @Get('/:id')
  getAccount(@Param() dto: GetAccountDTO) {
    return this.accountService.getAccount(dto);
  }
}
