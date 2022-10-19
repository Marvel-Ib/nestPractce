import { Module } from '@nestjs/common';
import { BitController } from './bit.controller';
import { BitService } from './bit.service';

@Module({
  controllers: [BitController],
  providers: [BitService],
})
export class BitModule {}
