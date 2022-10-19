import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class sendBitcoinDto {
  @IsNotEmpty()
  @IsNumber()
  satoshis: number;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsEmail()
  customerEmail: string;
}
