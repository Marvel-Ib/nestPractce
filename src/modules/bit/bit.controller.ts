import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BitService } from './bit.service';
import { generateAddressDto } from './dto/generateAddress.dto';
import { sendBitcoinDto } from './dto/sendBitcoin.dto';

@Controller('bit')
export class BitController {
  constructor(private bitservice: BitService) {}
  @Post('/generate')
  @UsePipes(ValidationPipe)
  generateBitcoinAddress(@Body() generateAddress: generateAddressDto) {
    console.log(generateAddress);
    return this.bitservice.generateBitcoinAddress(generateAddress);
  }

  @Post('/send')
  sendBitcoin(@Body() sendBitcoin: sendBitcoinDto) {
    return this.bitservice.sendBitcoin(sendBitcoin);
  }
}
