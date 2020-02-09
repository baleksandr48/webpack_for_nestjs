import { SecondService } from '../second/second.service';
export declare class FirstService {
    private readonly secondService;
    private readonly logger;
    constructor(secondService: SecondService);
}
