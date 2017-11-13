import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Client }                   from 'app/classes/model/client';
import { ClientConfiguration }      from 'app/classes/model/client-configuration';
import { Communication }            from 'app/classes/model/communication';

@Component({
  // selector: 'app-client-config',
  templateUrl: './client-config.component.html',
  styleUrls: ['./client-config.component.scss']
})
export class ClientConfigComponent implements OnInit {

   @Input() client: Client;
   @Input() communications: Communication[];

   @Input() clientConfigurations: ClientConfiguration[];

   public SAVESUCCESS: string = 'Close on succesful save';

   displayComm: Communication[];
   displayCommStartEmpty: boolean;

   newClientConfig: ClientConfiguration;
   prevClientConfig: ClientConfiguration;

   lastClientConfigRow: number;
   configureState: 'start' | 'pick' | 'configure' | 'save';

   clientDropEnabled: boolean = false;

   selectedRow: number;

   constructor(public configureClientModal: NgbActiveModal) { }

  ngOnInit() {
    console.log('ClientConfigComponent onInit...');
    console.log(this.client);
    console.log(this.communications);
    console.log(this.clientConfigurations);

    this.displayCommStartEmpty = true;
    this.displayComm = [];
    this.configureState = 'start';
  }

  addClientConfig(communication?: Communication) {

    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    if (this.newClientConfig && this.configureState === 'pick') {
      this.newClientConfig.communication = communication;
      this.configureState = 'configure';
    }

    if (this.configureState === 'start') {
      this.newClientConfig = new ClientConfiguration();
      this.newClientConfig.effective = tomorrow.getFullYear() + '-' + (tomorrow.getMonth() + 1) + '-' + tomorrow.getDate();
      this.newClientConfig.expiration = '9999-12-31';
      this.newClientConfig.client = this.client;
      this.newClientConfig.communication = new Communication();
      this.lastClientConfigRow = this.clientConfigurations.length;
      this.clientConfigurations[this.clientConfigurations.length] = this.newClientConfig;
      this.configureState = 'pick';
      this.clientDropEnabled = true;
    }

  }

  communicationDrop(dragEvent) {
    console.log('ClientConfigComponent clientDrop: ', dragEvent);
    if (dragEvent.dragData && typeof(dragEvent.dragData.id) === 'number' ) {
      this.addClientConfig(this.findCommunication(dragEvent.dragData.id));
    }
  }

  updateDateValue(newDateValue, cc: ClientConfiguration, dateType: string) {
    console.log('ClientConfigComponent updateDateValue: ', newDateValue, cc, dateType);
    if (dateType === 'effective') {
      cc.effective = newDateValue;
    }
    if (dateType === 'expiration') {
      cc.expiration = newDateValue;
    }
  }

  saveClientConfiguration() {
    console.log('ClientConfigComponent save');
    console.log(this.newClientConfig, ' client id: ', this.client);

    const modalResult: ClientConfigModalResult = {
      newClientConfig: this.newClientConfig
    };

    this.configureClientModal.close({resultTxt: this.SAVESUCCESS, modalResult: modalResult});
  }

  private findCommunication(id): Communication {
    return this.communications.find(c => c.id === id);
  }

  private setClickedRow(index) {
    this.selectedRow = index;
  }
}
export class ClientConfigModalResult {
  newClientConfig: ClientConfiguration;
}
