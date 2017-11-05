import { IProgramConfig } from 'app/model/iprog-config';

export class Program implements IProgramConfig {
    id: number;
    name: string;
    description: string;
    programConfiguration: number[];
}
