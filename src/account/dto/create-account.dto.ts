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

export class GetAccountDTO {
  @IsNotEmpty()
  id: string;
}
