import { Controller, Get, Post } from '@nestjs/common';
import { BitService } from './bit.service';

@Controller('bit')
export class BitController {
  constructor(private bitservice: BitService) {}
  @Post('/generate')
  generateBitcoinAddress() {
    this.bitservice.generateBitcoinAddress();
  }

  @Post('/send')
  sendBitcoin() {
    this.bitservice.sendBitcoin();
  }
}
