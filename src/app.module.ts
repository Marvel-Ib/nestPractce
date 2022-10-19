import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BitModule } from './modules/bit/bit.module';

@Module({
  imports: [BitModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
