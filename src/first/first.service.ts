import {
  Injectable,
  Logger,
} from '@nestjs/common';
import { SecondService } from '../second/second.service';

@Injectable()
export class FirstService {
  private readonly logger = new Logger(FirstService.name);
  constructor(private readonly secondService: SecondService) {}
}
