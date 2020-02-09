import { Module } from '@nestjs/common';
import { FirstController } from './first.controller';
import { FirstService } from './first.service';
import { SecondModule } from '../second/second.module';

@Module({
  imports: [SecondModule],
  controllers: [FirstController],
  providers: [FirstService],
})
export class FirstModule {}
