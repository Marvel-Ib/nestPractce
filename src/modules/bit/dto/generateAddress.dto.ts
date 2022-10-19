import { IsNotEmpty, IsString } from 'class-validator';

export class generateAddressDto {
  @IsNotEmpty()
  @IsString()
  label: string;

  @IsNotEmpty()
  @IsString()
  customerEmail: string;
}
