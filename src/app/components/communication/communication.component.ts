import { Component, OnInit }             from '@angular/core';
import { NgbModal, ModalDismissReasons,
         NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { ConfigureProgramViaCommunicationComponent } from '../modal/configure-program-via-communication/configure-program-via-communication.component';
//

import { Communication }               from './../../model/communication';
import { CommunicationService }        from './../../services/communication.service';
import { Program }                     from './../../model/program';
import { ProgramService }              from './../../services/program.service';
import { ProgramConfiguration }        from './../../model/program-configuration';
import { ProgramConfigurationService } from './../../services/program-configuration.service';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {

  communications: Communication[];
  programs: Program[];
  programConfigurations: ProgramConfiguration[];

  displayComm: Communication[];
  commId: string = '';
  commName: string = '';
  commDesc: string = '';
  selectedRow: number;
  closeResult: string;

  constructor(
    private communicationService: CommunicationService,
    private programService: ProgramService,
    private programConfigurationService: ProgramConfigurationService,
    private modalService: NgbModal) { }

    
  ngOnInit(): void {
    console.log('CommunicationComponent ngOnInit...');
    this.getCommunications();
    this.getPrograms();
    this.getProgramConfigurations();
  }

  getCommunications(): void {
    this.communicationService.getCommunications()
      .then(communications => {
        this.communications = communications;
        this.displayComm = this.communications.slice();
      })
      .catch(error => console.log('getCommunications error: ', error));
  }

  getPrograms(): void {
    this.programService.getPrograms()
      .then(programs => this.programs = programs)
      .catch(error => console.log('getPrograms error: ', error));
  }

  getProgramConfigurations(): void {
    this.programConfigurationService.getProgramConfigurations()
      .then(programConfigurations => this.programConfigurations = programConfigurations)
      .catch(error => console.log('getProgramConfigurations error: ', error));
  }

  setClickedRow(index) {
    this.selectedRow = index;
  }
  
  searchCommId() {
    console.log('CommunicationComponent searchCommId user entered: ', this.commId);
    this.displayComm = this.displayComm.filter(comm => {
      return (String(comm.id).indexOf(this.commId) !== -1 )
    
    });
  }

  searchCommName() {
    console.log('CommunicationComponent searchCommName user entered: ', this.commName);
    this.displayComm = this.displayComm.filter(comm => {
      //return (comm.name.indexOf(this.commName) !== -1 );
      return this.containsString(comm.name, this.commName);
    });
  }

  searchCommDesc() {
    console.log('CommunicationComponent searchCommDesc user entered: ', this.commDesc);
    this.displayComm = this.displayComm.filter(comm => {
      return (comm.description.indexOf(this.commDesc) !== -1 );
    
    });
  }
  
  containsString(columnValue: string, searchValue: string): boolean {
    return (columnValue.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) !== -1);
  }

  getCommunicationsSorted(criteria: CommunicationSortCriteria, commArray: Communication[]): Communication[] {
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

    return commArray
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
    this.displayComm = this.getCommunicationsSorted($event, this.displayComm);
  }

  private configureProgramModal(commId) {
    const modalOpts: NgbModalOptions = {
      size: 'lg'
    };
    const modalRef = this.modalService.open(ConfigureProgramViaCommunicationComponent, modalOpts);
    const modalComp: ConfigureProgramViaCommunicationComponent  = modalRef.componentInstance;

    //modalComp.name = 'Configure Program';
    modalComp.communication = this.findCommunication(commId);
    modalComp.programs = this.programs;
    modalComp.programConfigurations = this.findProgramConfigurations(commId);

    modalRef.result.then((result) => {
      if (result.resultTxt == modalComp.SAVESUCCESS) {
        console.log('addNewProgram result: ', result.resultObj);
        this.closeResult = `Closed with: ${result.resultTxt}`;
        //this.addProgram(result.resultObj);
      } else {
        this.closeResult = `Closed with: ${result}`;
      }
      console.log('addNewProgram result: ', this.closeResult);
    }, (reason) => {
      //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      //console.log('addNewProgram result: ', this.closeResult);
    });    
  }

  private findCommunication(id): Communication {
    return this.communications.find(c => c.id === id);
  }

  private findProgramConfigurations(id): ProgramConfiguration[] {
    return this.programConfigurations.filter(pc => pc.communication.id === id);
  }

}


export class CommunicationSortCriteria {
  sortColumn: string;
  sortDirection: string;
}