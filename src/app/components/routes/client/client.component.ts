import { Component, OnInit }           from '@angular/core';
import { NgbModal, ModalDismissReasons,
         NgbModalOptions }             from '@ng-bootstrap/ng-bootstrap';
//
import { Communication,
         CommunicationSortCriteria,
         CommunicationConfigAction }   from 'app/classes/model/communication';
//
import { ClientConfigComponent,
         ClientConfigModalResult }     from 'app/components/modal/client-config/client-config.component';
//
import { Client,
         ClientSortCriteria,
         ClientConfigAction }          from 'app/classes/model/client';
import { ClientConfiguration }         from 'app/classes/model/client-configuration';

import { DataApiService }              from 'app/services/data-api/data-api.service';

@Component({
  // selector: 'app-client', selector not needed on routed components
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  communications: Communication[];
  clients: Client[];
  clientConfigurations: ClientConfiguration[];
  displayClient: Client[];

  selectedRow: number;
  closeResult: string;

  constructor(
    private dataApiService: DataApiService,
    private modalService: NgbModal
  ) { }

  async ngOnInit() {
    console.log('ClientComponent ngOnInit...');
    await this.getCommunications();
    await this.getClients();
    await this.getClientConfigurations();

    this.displayClient = this.clients;
  }

  async getCommunications() {
    try {
      this.communications = await this.dataApiService.getCommunications();
    } catch (error) {
      console.log('getCommunications error: ', error);
    }
  }

  async getClients() {
    try {
      this.clients = await this.dataApiService.getClients();
    } catch (error) {
      console.log('getClients error: ', error);
    }
  }

  async getClientConfigurations() {
    try {
      this.clientConfigurations = await this.dataApiService.getClientConfigurations();
    } catch (error) {
      console.log('getClientConfigurations error: ', error);
    }
  }

  private configureClient(clientConfigAction: ClientConfigAction) {
    if (clientConfigAction.configType === 'communications') {
      this.configureClientModal(clientConfigAction.clientId);
    }
  }

  private setClickedRow(index) {
    this.selectedRow = index;
  }

  private configureClientModal(clientId) {
    const modalOpts: NgbModalOptions = {
      size: 'lg'
    };
    const modalRef = this.modalService.open(ClientConfigComponent, modalOpts);
    const modalComp: ClientConfigComponent  = modalRef.componentInstance;
    const selectedClient: Client  = this.findClient(clientId);
    // modalComp.name = 'Configure Clients';
    modalComp.communications = this.communications;
    modalComp.client = selectedClient;
    modalComp.clientConfigurations = this.findClientConfigurations(selectedClient.id);

    modalRef.result.then((result) => {
      if (result.resultTxt === modalComp.SAVESUCCESS) {
        console.log('configureClientModal result: ', result.modalResult);
        this.closeResult = `Closed with: ${result.resultTxt}`;
        if (result.modalResult) {
          const modalResult: ClientConfigModalResult = result.modalResult;
          // if (modalResult.prevProgConfig) {
          //   this.updateClientConfiguration(modalResult.prevProgConfig);
          // }
          if (modalResult.newClientConfig) {
             this.addClientConfiguration(modalResult.newClientConfig);
          }
        } else {
          // this would be some kind of exception
          console.log('ClientComponent configureClientModal bad result: ', result.modalResult);
        }
      } else {
        this.closeResult = `Closed with: ${result}`;
      }
      this.setClickedRow(null);
      console.log('configureClient result: ', this.closeResult);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.setClickedRow(null);
      console.log('addNewClientConfig result: ', this.closeResult);
    });
  }

  private findClient(id: number): Client {
    return this.clients.find(c => c.id === id);
  }

  private findClientConfigurations(id): ClientConfiguration[] {
    return this.clientConfigurations.filter(cc => {
      if (cc.client.id === id) {
        console.log(cc, 'Client: ', typeof(cc.client));
        if (typeof(cc.client) === 'number') {
          const clientId = <number> cc.client;
          cc.client = this.findClient(clientId);
        }
        return true;
      }
    });
  }

  private addClientConfiguration(clientConfiguration: ClientConfiguration): void {
    this.dataApiService.createClientConfiguration(clientConfiguration)
      .then(pc => console.log('addClientConfiguration:', clientConfiguration, this.clientConfigurations))
      .catch(error =>  console.log('addClientConfiguration error: ', error));
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
