import { Module } from '@nestjs/common';
import { BitController } from './bit.controller';
import { BitService } from './bit.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [BitController],
  providers: [BitService],
  imports: [HttpModule],
})
export class BitModule {}
