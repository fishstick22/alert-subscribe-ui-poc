import { IProgramConfig } from 'app/model/iprog-config';

export class Communication implements IProgramConfig {
    id: number;
    name: string;
    description: string;
    programConfiguration: number[];
    clientConfiguration: number[];
}
