import { Component, OnInit,
         Input, Output, EventEmitter } from '@angular/core';

import { Client, ClientSortCriteria,
         ClientConfigAction }  from 'app/classes/model/client';

@Component({
  selector: 'app-client-action-table',
  templateUrl: './action-table.component.html',
  styleUrls: ['./action-table.component.scss']
})
export class ClientActionTableComponent implements OnInit {

  @Input() clients: Client[];
  @Input() displayClient: Client[];
  @Input() displayClientStartEmpty: boolean = true;
  @Input() displayCommunication: string = 'Communication';
  @Input() showClientId: boolean = true;
  @Input() showClientCode: boolean = true;
  @Input() showClientName: boolean = true;
  @Input() showStatus: boolean = false;
  @Input() showAction: boolean = true;

  @Output() selRowOut = new EventEmitter<any>();
  @Output() selectedClient = new EventEmitter<Client>();
  @Output() clientConfigAction = new EventEmitter<ClientConfigAction>();

  clientIdSearch: string = '';
  clientIdSearchLast: string = '';
  clientNameSearch: string = '';
  clientNameSearchLast: string = '';
  clientCodeSearch: string = '';
  clientCodeSearchLast: string = '';

  selectedRow: number;

  constructor() { }

  ngOnInit() {
    console.log('ClientActionTableComponent onInit...', this.clients, this.displayClient);
    if (!this.displayClient) { // if all else fails, start with it empty
      this.displayClient = []; // instead of 'undefined'
    }
  }

  selectClient(client: Client) {
    this.selectedClient.emit(client);
  }

  setClickedRow(index) {
    if (this.selectedRow === index) {
      this.selectedRow = null;
    } else {
      this.selectedRow = index;
    }
    this.selRowOut.emit(index);
  }

  private configureClient(clientConfigAction: ClientConfigAction) {
    this.clientConfigAction.emit(clientConfigAction);
  }

  onSorted($event) {
    console.log('ClientActionTableComponent onSorted...');
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
    // TODO yes this is a monster if-then-else method
    // once the logic is worked out move it into a service and refactor
    // align/chain the filter pattern across all searchable rows
    const clientIdAdded     = this.clientIdSearch.indexOf(this.clientIdSearchLast) === 0;
    const clientCodeAdded   = this.clientCodeSearch.indexOf(this.clientCodeSearchLast) === 0;
    const clientNameAdded   = this.clientNameSearch.indexOf(this.clientNameSearchLast) === 0;

    if ( !clientIdAdded  || !clientCodeAdded || !clientNameAdded ) {
      console.log('user deleting something...');
      if (this.displayClientStartEmpty &&
          this.clientNameSearch === '' &&
          this.clientCodeSearch === '' &&
          this.clientIdSearch === ''
      ) {
        this.displayClient = [];
      } else {
        // refresh the list, reapply each filter, gonna guess mostly searching on names
        this.displayClient = this.clients.filter(client => {
          return this.containsString(client.name, this.clientNameSearch);
        });
      }
    } else {
      console.log('just adding to what was there');
      if (this.clientNameSearch !== '') {
        // we may be starting empty, if so use the full array first
        if (this.displayClient.length === 0) {
          this.displayClient = this.clients.filter(client => {
            return this.containsString(client.name, this.clientNameSearch);
          });
        } else {
          this.displayClient = this.displayClient.filter(client => {
            return this.containsString(client.name, this.clientNameSearch);
          });
        }
      }
    }
    if (this.clientCodeSearch !== '') {
      if (this.displayClient.length === 0) {
        this.displayClient = this.clients.filter(client => {
          return this.containsString(client.code, this.clientCodeSearch);
        });
      } else {
        this.displayClient = this.displayClient.filter(client => {
          return this.containsString(client.code, this.clientCodeSearch);
        });
      }
    }
    // least likely to search on client id specifically
    if (this.clientIdSearch !== '') {
      if (this.displayClient.length === 0) {
        this.displayClient = this.clients.filter(client => {
          return (String(client.id).indexOf(this.clientIdSearch) !== -1 );
        });
      } else {
        this.displayClient = this.displayClient.filter(client => {
          return (String(client.id).indexOf(this.clientIdSearch) !== -1 );
        });
      }
    }
  }

  private containsString(columnValue: string, searchValue: string): boolean {
    return (columnValue.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) !== -1);
  }

}
