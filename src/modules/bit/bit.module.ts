import { Module } from '@nestjs/common';
import { BitController } from './bit.controller';
import { BitService } from './bit.service';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './transaction.entity';
import { TransactionRespository } from './transaction.repository';

@Module({
  controllers: [BitController],
  providers: [BitService],
  imports: [HttpModule, TypeOrmModule.forFeature([Transaction])],
})
export class BitModule {}
