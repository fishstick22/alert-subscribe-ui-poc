import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Client }                   from 'app/classes/model/client';
import { ClientConfiguration }      from 'app/classes/model/client-configuration';
import { Communication }            from 'app/classes/model/communication';

@Component({
  // selector: 'app-client-config-by-comm', Entry Component needs no selector!
  templateUrl: './client-config-by-comm.component.html',
  styleUrls: ['./client-config-by-comm.component.scss']
})
export class ClientConfigByCommComponent implements OnInit {

  @Input() communication: Communication;
 // @Input() communications: Communication[];

  @Input() clients: Client[];
  @Input() clientConfigurations: ClientConfiguration[];

  public SAVESUCCESS: string = 'Close on succesful save';

    newClientConfig: ClientConfiguration;
    prevClientConfig: ClientConfiguration;

    selectedClient: number;
    displayClient: Client[];
    displayClientStartEmpty: boolean;
    lastClientConfigRow: number;
    configureState: 'start' | 'pick' | 'configure' | 'save';

    clientDropEnabled: boolean = false;

    constructor(public configureClientModal: NgbActiveModal) { }

  ngOnInit() {
    console.log('ClientConfigByCommComponent init: ');
    console.log(this.communication);
    console.log(this.clients);
    console.log(this.clientConfigurations);

    this.displayClient = [];
    this.displayClientStartEmpty = true;
    this.configureState = 'start';
  }

  addClientConfig(client?: Client) {

    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    if (this.newClientConfig && this.configureState === 'pick') {
      this.newClientConfig.client = client;
      this.configureState = 'configure';
    }

    if (this.configureState === 'start') {
      this.newClientConfig = new ClientConfiguration();
      this.newClientConfig.effective = tomorrow.getFullYear() + '-' + (tomorrow.getMonth() + 1) + '-' + tomorrow.getDate();
      this.newClientConfig.expiration = '9999-12-31';
      this.newClientConfig.client = new Client();
      this.newClientConfig.communication = this.communication;
      this.lastClientConfigRow = this.clientConfigurations.length;
      this.clientConfigurations[this.clientConfigurations.length] = this.newClientConfig;
      this.configureState = 'pick';
      this.clientDropEnabled = true;
    }
  }

  clientDrop(dragEvent) {
    console.log('ClientConfigByCommComponent clientDrop: ', dragEvent);
    if (dragEvent.dragData && typeof(dragEvent.dragData.id) === 'number' ) {
      this.addClientConfig(this.findClient(dragEvent.dragData.id));
    }
  }

  updateDateValue(newDateValue, cc: ClientConfiguration, dateType: string) {
    console.log('ClientConfigByCommComponent updateDateValue: ', newDateValue, cc, dateType);
    if (dateType === 'effective') {
      cc.effective = newDateValue;
    }
    if (dateType === 'expiration') {
      cc.expiration = newDateValue;
    }
  }

  saveClientConfiguration() {
    console.log('ClientConfigByCommComponent save');
    console.log(this.newClientConfig, ' client id: ', this.selectedClient);

    const modalResult: ClientConfigModalResult = {
      newClientConfig: this.newClientConfig
    };

    this.configureClientModal.close({resultTxt: this.SAVESUCCESS, modalResult: modalResult});
  }

  private findClient(id): Client {
    return this.clients.find(c => c.id === id);
  }

}

export class ClientConfigModalResult {
  newClientConfig: ClientConfiguration;
}
