import { IsEmail, IsBoolean, IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  // Decorator do class-validator
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  admin: boolean;
}
