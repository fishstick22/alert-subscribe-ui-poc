import { IProgramConfig } from 'app/model/iprog-config';

export class Program implements IProgramConfig {
    id: number;
    name: string;
    description: string;
    programConfiguration: number[];
}

export class ProgramConfigAction {
  constructor(id: string, type: string) {
    this.progId = id;
    this.configType = type;
  }
  progId: string;
  configType: string;
}
