import { Component, OnInit,
         Input, Output, EventEmitter } from '@angular/core';

import { Communication,
         CommunicationSortCriteria,
         CommunicationConfigAction }   from 'app/classes/model/communication';

@Component({
  selector: 'app-comm-action-table',
  templateUrl: './action-table.component.html',
  styleUrls: ['./action-table.component.scss']
})
export class CommActionTableComponent implements OnInit {

  @Input() communications: Communication[];
  @Input() displayComm: Communication[];
  @Input() displayCommStartEmpty: boolean = true;
  @Input() displayClient: string; // = 'Client';
  @Input() displayProgram: string; // = 'Program';
  @Input() showCommId: boolean = true;
  @Input() showCommName: boolean = true;
  @Input() showCommDesc: boolean = false;
  @Input() showStatus: boolean = false;
  @Input() showAction: boolean = true;

  @Output() selRowOut = new EventEmitter<any>();
  @Output() selectedCommunication = new EventEmitter<Communication>();
  @Output() commConfigAction = new EventEmitter<CommunicationConfigAction>();

  commIdSearch: string = '';
  commIdSearchLast: string = '';
  commNameSearch: string = '';
  commNameSearchLast: string = '';
  commDescSearch: string = '';
  commDescSearchLast: string = '';

  selectedRow: number;

  constructor() { }

  ngOnInit() {
    console.log('CommActionTableComponent:', this.communications);
    if (!this.displayComm) { // if all else fails, start with it empty
      this.displayComm = []; // instead of 'undefined'
    }
  }

  selectCommunication(communication: Communication) {
    this.selectedCommunication.emit(communication);
  }

  setClickedRow(index) {
    if (this.selectedRow === index) {
      this.selectedRow = null;
    } else {
      this.selectedRow = index;
    }
    this.selRowOut.emit(index);
  }

  private configureCommunication(commConfigAction: CommunicationConfigAction) {
    this.commConfigAction.emit(commConfigAction);
  }

  onSorted($event) {
    console.log('CommunicationComponent onSorted...');
    this.displayComm = this.getCommunicationsSorted($event, this.displayComm);
  }

  getCommunicationsSorted(criteria: CommunicationSortCriteria, commArray: Communication[]): Communication[] {

    return commArray
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

  searchCommId() {
    console.log('CommunicationComponent searchCommId user entered: ', this.commIdSearch, this.commIdSearchLast);
    this.searchCommunicatonTable();
    this.commIdSearchLast = this.commIdSearch;
  }

  searchCommName() {
    console.log('CommunicationComponent searchCommName user entered: ', this.commNameSearch, this.commNameSearchLast);
    this.searchCommunicatonTable();
    this.commNameSearchLast = this.commNameSearch;
  }

  searchCommDesc() {
    console.log('CommunicationComponent searchCommDesc user entered: ', this.commDescSearch, this.commDescSearchLast);
    this.searchCommunicatonTable();
    this.commDescSearchLast = this.commDescSearch;
  }

  private searchCommunicatonTable() {
    // TODO yes this is a monster if-then-else method
    // once the logic is worked out move it into a service and refactor
    if (!this.displayCommStartEmpty && this.displayComm.length === 0) {
      this.displayComm = this.communications;
    }
    // align/chain the filter pattern across all searchable rows
    const commIdAdded     = this.commIdSearch.indexOf(this.commIdSearchLast) === 0;
    const commNameAdded   = this.commNameSearch.indexOf(this.commNameSearchLast) === 0;
    const commDescAdded   = this.commDescSearch.indexOf(this.commDescSearchLast) === 0;

    if ( !commIdAdded || !commNameAdded || !commDescAdded ) {
      console.log('user deleting something...');
      if (this.displayCommStartEmpty &&
          this.commNameSearch === '' &&
          this.commDescSearch === '' &&
          this.commIdSearch === ''
      ) {
        this.displayComm = [];
      } else {
        // refresh the list, reapply each filter, gonna guess mostly searching on names
        this.displayComm = this.communications.filter(comm => {
          return this.containsString(comm.name, this.commNameSearch);
        });
      }
    } else {
      console.log('just adding to what was there');
      if (this.commNameSearch !== '') {
        // we may be starting empty, if so use the full array first
        if (this.displayComm.length === 0) {
          this.displayComm = this.communications.filter(client => {
            return this.containsString(client.name, this.commNameSearch);
          });
        } else {
          this.displayComm = this.displayComm.filter(client => {
            return this.containsString(client.name, this.commNameSearch);
          });
        }
      }
    }
    if (this.commDescSearch !== '') {
      if (this.displayComm.length === 0) {
        this.displayComm = this.communications.filter(comm => {
          return this.containsString(comm.description, this.commDescSearch);
        });
      } else {
        this.displayComm = this.displayComm.filter(comm => {
          return this.containsString(comm.description, this.commDescSearch);
        });
      }
    }
    if (this.commIdSearch !== '') {
      if (this.displayComm.length === 0) {
        this.displayComm = this.communications.filter(comm => {
          return (String(comm.id).indexOf(this.commIdSearch) !== -1 );
        });
      } else {
        this.displayComm = this.displayComm.filter(comm => {
          return (String(comm.id).indexOf(this.commIdSearch) !== -1 );
        });
      }
    }
  }

  private containsString(columnValue: string, searchValue: string): boolean {
    return (columnValue.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) !== -1);
  }

}
