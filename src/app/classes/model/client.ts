import { IClientConfig } from 'app/classes/model/iclient-config';

export class Client implements IClientConfig {
    id: number;
    code: string;
    name: string;
    clientConfiguration: number[];
}

export class ClientSortCriteria {
  sortColumn: string;
  sortDirection: string;
}

export class ClientConfigAction {
  constructor(id: string, type: string) {
    this.clientId = id;
    this.configType = type;
  }
  clientId: string;
  configType: string;
}
