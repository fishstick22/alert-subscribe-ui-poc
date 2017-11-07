import { IProgramConfig } from 'app/model/iprog-config';

export class Communication implements IProgramConfig {
    id: number;
    name: string;
    description: string;
    programConfiguration: number[];
    clientConfiguration: number[];
}

export class CommunicationSortCriteria {
  sortColumn: string;
  sortDirection: string;
}

export class CommunicationConfigAction {
    constructor(id: string, type: string) {
      this.commId = id;
      this.configType = type;
    }
    commId: string;
    configType: string;
}
