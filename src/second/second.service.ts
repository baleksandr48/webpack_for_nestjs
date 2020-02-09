import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class SecondService {
  private readonly logger = new Logger(SecondService.name);
}
