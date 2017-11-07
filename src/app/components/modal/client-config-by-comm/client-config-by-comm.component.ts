import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Client }                   from 'app/model/client';
import { ClientConfiguration }      from 'app/model/client-configuration';
import { Communication }            from 'app/model/communication';

@Component({
  // selector: 'app-client-config-by-comm', Entry Component needs no selector!
  templateUrl: './client-config-by-comm.component.html',
  styleUrls: ['./client-config-by-comm.component.scss']
})
export class ClientConfigByCommComponent implements OnInit {

  @Input() communication: Communication;
  @Input() communications: Communication[];

  @Input() clients: Client[];
  @Input() clientConfigurations: ClientConfiguration[];

  public SAVESUCCESS: string = 'Close on succesful save';

    newClientConfig: ClientConfiguration;
    prevClientConfig: ClientConfiguration;

    selectedClient: number;
    displayClient: Client[];
    // lastClientConfigRow: number;

    constructor(public configureClientModal: NgbActiveModal) { }

  ngOnInit() {
    console.log('ClientConfigByCommComponent init: ');
    console.log(this.communication);
    console.log(this.clients);
    console.log(this.clientConfigurations);
    // if (this.clientConfigurations.length === 0) { // no existing configs for comm
    //   this.addClientConfig();
    // } else {
    //   const indxOfLast = this.clientConfigurations.length - 1;
    //   if (this.clientConfigurations[indxOfLast] && this.clientConfigurations[indxOfLast].client) {
    //     this.prevClientConfig = <ClientConfiguration> this.clientConfigurations[indxOfLast];
    //     this.selectedClient = this.prevClientConfig.client.id;
    //     this.addClientConfig(this.clientConfigurations[indxOfLast]);
    //   }
    // }
    this.displayClient = this.clients;
  }

  addClientConfig(lastClientConfig?: ClientConfiguration) {

    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    if (lastClientConfig) {
      // adding a new row, expiring the previous, copying the previous values
      lastClientConfig.expiration = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      this.newClientConfig = new ClientConfiguration(lastClientConfig);

    } else {
      // this is a first-time row for this communication, set some defaults
      this.newClientConfig = new ClientConfiguration();

    }

    this.newClientConfig.effective = tomorrow.getFullYear() + '-' + (tomorrow.getMonth() + 1) + '-' + tomorrow.getDate();
    this.newClientConfig.expiration = '9999-12-31';

    // this.lastClientConfigRow = this.clientConfigurations.length;
    // this.clientConfigurations[this.clientConfigurations.length] = this.newClientConfig;

  }

  updateDateValue(newDate, cc: ClientConfiguration, dateType: string) {
    console.log('ClientConfigByCommComponent updateDateValue: ', newDate.newDateValue, cc, dateType);
    if (dateType === 'effective') {
      cc.effective = newDate.newDateValue;
    }
    if (dateType === 'expiration') {
      cc.expiration = newDate.newDateValue;
    }
  }

  saveClientConfiguration() {
    console.log('ClientConfigByCommComponent save');
    console.log(this.newClientConfig, ' client id: ', this.selectedClient);

    this.newClientConfig.client = this.findClient(this.selectedClient);
    this.newClientConfig.communication = this.communication;

    const modalResult: ClientConfigModalResult = {
      prevProgConfig: this.prevClientConfig,
      newProgConfig: this.newClientConfig
    };

    this.configureClientModal.close({resultTxt: this.SAVESUCCESS, modalResult: modalResult});
  }

  private findClient(id): Client {
    return this.clients.find(c => c.id === id);
  }

}

export class ClientConfigModalResult {
  prevProgConfig: ClientConfiguration;
  newProgConfig: ClientConfiguration;
}
