import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateAccountDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
}

export class GetAccountByIdDTO {
  @IsNotEmpty()
  accountId: string;
}

export class GetAccountDTO {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
