import { Component, OnInit }     from '@angular/core';

import { Communication }         from './../../model/communication';
import { CommunicationService }  from './../../services/communication.service';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {

  communications: Communication[];
  displayComm: Communication[];
  commId: string = '';
  commName: string = '';
  commDesc: string = '';

  constructor(private communicationService: CommunicationService) { }

  searchCommId() {
    console.log('CommunicationComponent searchCommId user entered: ', this.commId);
    this.displayComm = this.communications.filter(comm => {
      return (String(comm.id).indexOf(this.commId) !== -1 )
    
    });
  }

  searchCommName() {
    console.log('CommunicationComponent searchCommName user entered: ', this.commName);
    this.displayComm = this.communications.filter(comm => {
      return (String(comm.name).indexOf(this.commName) !== -1 )
    
    });
  }

  searchCommDesc() {
    console.log('CommunicationComponent searchCommDesc user entered: ', this.commDesc);
    this.displayComm = this.communications.filter(comm => {
      return (String(comm.description).indexOf(this.commDesc) !== -1 )
    
    });
  }
  
  getCommunications(): void {
    this.communicationService.getCommunications()
    .then(communications => {
      console.log(communications)
      this.communications = communications;
      this.displayComm = communications;
      console.log(this.communications.length);
    });
  }

  getCommunicationsSorted(criteria: CommunicationSortCriteria): Communication[] {
    // this.communications.sort((a,b) => {
    //   if(criteria.sortDirection === 'desc') {
    //     return a[criteria.sortColumn] < b[criteria.sortColumn];
    //   } else {
    //     return a[criteria.sortColumn] > b[criteria.sortColumn];
    //   }
    // });

    //.sort() takes a function that returns number, not boolean.
    // You need to return negative if the first item is smaller; 
    // positive if it it's larger, or zero if they're equal.

    return this.communications
      .sort((a,b) => {
        if(criteria.sortDirection === 'asc') {
          //return  a[criteria.sortColumn] < b[criteria.sortColumn] ? -1 : 1;
          if ( a[criteria.sortColumn] < b[criteria.sortColumn]) return -1;
          if ( a[criteria.sortColumn] > b[criteria.sortColumn]) return 1;
          return 0;
        } else if(criteria.sortDirection === 'desc') {
          //return  a[criteria.sortColumn] > b[criteria.sortColumn] ? -1 : 1;
          if ( a[criteria.sortColumn] > b[criteria.sortColumn]) return -1;
          if ( a[criteria.sortColumn] < b[criteria.sortColumn]) return 1;
          return 0;
        } else return 0;
      });

  }

  onSorted($event){
    console.log('CommunicationComponent onSorted...')
    this.displayComm = this.getCommunicationsSorted($event);
  }

  ngOnInit(): void {
    console.log('CommunicationComponent ngOnInit...');
    this.getCommunications();
  }

}

export class CommunicationSortCriteria {
  sortColumn: string;
  sortDirection: string;
}