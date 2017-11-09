import { Component, OnInit }           from '@angular/core';
import { NgbModal, ModalDismissReasons,
         NgbModalOptions }             from '@ng-bootstrap/ng-bootstrap';

import { ProgramConfigByCommComponent,
         ProgramConfigModalResult }    from 'app/components/modal/program-config-by-comm/program-config-by-comm.component';
//

import { Client }                      from 'app/classes/model/client';

import { DataApiService }              from 'app/services/data-api/data-api.service';

@Component({
  // selector: 'app-client', selector not needed on routed components
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  clients: Client[];

  displayClient: Client[];

  selectedRow: number;
  closeResult: string;

  constructor(
    private dataApiService: DataApiService,
    private modalService: NgbModal
  ) { }

  async ngOnInit() {
    console.log('ClientComponent ngOnInit...');
    await this.getClients();

    this.displayClient = this.clients;
  }

  async getClients() {
    try {
      this.clients = await this.dataApiService.getClients();
    } catch (error) {
      console.log('getClients error: ', error);
    }
  }

  getClientConfigurations() {}

  private setClickedRow(index) {
    this.selectedRow = index;
  }

  private configureClientModal(clientId) {
    const modalOpts: NgbModalOptions = {
      size: 'lg'
    };
  }
}

