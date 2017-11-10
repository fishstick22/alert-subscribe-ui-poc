import { IProgramConfig } from 'app/classes/model/iprog-config';
import { IClientConfig } from 'app/classes/model/iclient-config';

export class Communication implements IProgramConfig, IClientConfig {
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
