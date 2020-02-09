import { NestFactory } from '@nestjs/core';
import { FirstModule } from './first/first.module';

export const handler = () => {
  NestFactory.create(FirstModule);
};
