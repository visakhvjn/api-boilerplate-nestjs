import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDTO } from './dto';
import { AccountService } from 'src/account/account.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private accountService: AccountService,
  ) {}

  @Post()
  async signIn(@Body() dto: SignInDTO) {
    const account = await this.accountService.getAccount(dto);

    if (account) {
      return this.authService.signToken({
        accountId: account.id,
        email: account.email,
      });
    } else {
      throw new UnauthorizedException();
    }
  }
}
