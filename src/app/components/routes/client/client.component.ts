import { Component, OnInit }           from '@angular/core';
import { NgbModal, ModalDismissReasons,
         NgbModalOptions }             from '@ng-bootstrap/ng-bootstrap';

import { ProgramConfigByCommComponent,
         ProgramConfigModalResult }    from 'app/components/modal/program-config-by-comm/program-config-by-comm.component';
//

import { Client }                      from 'app/model/client';
import { ClientService }               from 'app/services/client.service';

@Component({
  // selector: 'app-client', selector not needed on routed components
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  clients: Client[];

  displayClient: Client[];

  clientIdSearch: string = '';
  clientIdSearchLast: string = '';

  clientNameSearch: string = '';
  clientNameSearchLast: string = '';

  clientCodeSearch: string = '';
  clientCodeSearchLast: string = '';

  selectedRow: number;
  closeResult: string;

  constructor(
    private clientService: ClientService,
    private modalService: NgbModal
  ) { }

  async ngOnInit() {
    console.log('ClientComponent ngOnInit...');
    await this.getClients();

    this.displayClient = this.clients;
  }

  async getClients() {
    try {
      this.clients = await this.clientService.getClients();
    } catch (error) {
      console.log('getClients error: ', error);
    }
  }

  getClientConfigurations() {}

  onSorted($event) {
    console.log('CommunicationComponent onSorted...');
    this.displayClient = this.getClientsSorted($event, this.displayClient);
  }

  getClientsSorted(criteria: ClientSortCriteria, clientArray: Client[]): Client[] {

    return clientArray
      .sort((a, b) => {
        if (criteria.sortDirection === 'asc') {
          if ( a[criteria.sortColumn] < b[criteria.sortColumn]) { return -1; }
          if ( a[criteria.sortColumn] > b[criteria.sortColumn]) { return 1; }
          return 0;
        } else if (criteria.sortDirection === 'desc') {
          if ( a[criteria.sortColumn] > b[criteria.sortColumn]) { return -1; }
          if ( a[criteria.sortColumn] < b[criteria.sortColumn]) { return 1; }
          return 0;
        } else { return 0; }
      });

  }

  searchClientId() {
    console.log('ClientComponent searchClientId user entered: ', this.clientIdSearch, this.clientIdSearchLast);
    this.searchClientTable();
    this.clientIdSearchLast = this.clientIdSearch;
  }

  searchClientCode() {
    console.log('ClientComponent searchClientCode user entered: ', this.clientCodeSearch, this.clientCodeSearchLast);
    // if user enters something then starts backing out, this stops working
    // so need to keep track somehow and add back rows that were previously removed
    this.searchClientTable();
    this.clientCodeSearchLast = this.clientCodeSearch;
  }

  searchClientName() {
    console.log('ClientComponent searchClientName user entered: ', this.clientNameSearch, this.clientNameSearchLast);
    this.searchClientTable();
    this.clientNameSearchLast = this.clientNameSearch;
  }

  private searchClientTable() {
    // align/chain the filter pattern across all searchable rows
    const clientIdAdded     = this.clientIdSearch.indexOf(this.clientIdSearchLast) === 0;
    const clientCodeAdded   = this.clientCodeSearch.indexOf(this.clientCodeSearchLast) === 0;
    const clientNameAdded   = this.clientNameSearch.indexOf(this.clientNameSearchLast) === 0;

    if ( !clientIdAdded  || !clientCodeAdded || !clientNameAdded ) {
      console.log('user deleting something...');
      // refresh the list, reapply each filter, gonna guess mostly searching on names
      this.displayClient = this.clients.filter(client => {
        return this.containsString(client.name, this.clientNameSearch);
      });
    } else {
      console.log('just adding to what was there');
      if (this.clientNameSearch !== '') {
        this.displayClient = this.displayClient.filter(client => {
          return this.containsString(client.name, this.clientNameSearch);
        });
      }
    }
    if (this.clientCodeSearch !== '') {
      this.displayClient = this.displayClient.filter(client => {
        return this.containsString(client.code, this.clientCodeSearch);
      });
    }
    // least likely to search on client id specifically
    if (this.clientIdSearch !== '') {
      this.displayClient = this.displayClient.filter(client => {
        return (String(client.id).indexOf(this.clientIdSearch) !== -1 );
      });
    }
  }

  private containsString(columnValue: string, searchValue: string): boolean {
    return (columnValue.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) !== -1);
  }

  private setClickedRow(index) {
    this.selectedRow = index;
  }

  private configureClientModal(clientId) {
    const modalOpts: NgbModalOptions = {
      size: 'lg'
    };
  }
}

export class ClientSortCriteria {
  sortColumn: string;
  sortDirection: string;
}
