import { Component, OnInit }           from '@angular/core';
import { NgbModal, ModalDismissReasons,
         NgbModalOptions }             from '@ng-bootstrap/ng-bootstrap';

import { ConfigureProgramViaCommunicationComponent,
         ProgramConfigModalResult }    from '../modal/configure-program-via-communication/configure-program-via-communication.component';
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

    
  async ngOnInit() {
    console.log('CommunicationComponent ngOnInit...');
    await this.getCommunications();
    this.getPrograms();
    await this.getProgramConfigurations();

    this.displayComm = this.communications;
  }

  async getCommunications() {
    try {
      this.communications = await this.communicationService.getCommunications();
    } catch (error) {
      console.log('getCommunications error: ', error)
    }
  }

  getPrograms(): void {
    this.programService.getPrograms()
      .then(programs => this.programs = programs)
      .catch(error => console.log('getPrograms error: ', error));
  }

  async getProgramConfigurations() {
    try {
      this.programConfigurations = await this.programConfigurationService.getProgramConfigurations();
    } catch (error) {
      console.log('getProgramConfigurations error: ', error)
    }
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

  private setClickedRow(index) {
    this.selectedRow = index;
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
        console.log('configureProgramModal result: ', result.modalResult);
        this.closeResult = `Closed with: ${result.resultTxt}`;
        if (result.modalResult) {
          const modalResult: ProgramConfigModalResult = result.modalResult;
          if (modalResult.prevProgConfig) {
            this.updateProgramConfiguration(modalResult.prevProgConfig);
          }
          if (modalResult.newProgConfig) {
            this.addProgramConfiguration(modalResult.newProgConfig);  
          }
        } else {
          // this would be some kind of exception
          console.log('CommunicationComponent configureProgramModal bad result: ', result.modalResult);
        }
      } else {
        this.closeResult = `Closed with: ${result}`;
      }
      this.setClickedRow(null);
      console.log('configureProgram result: ', this.closeResult);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.setClickedRow(null);
      console.log('addNewProgram result: ', this.closeResult);
    });    
  }

  private findProgram(id: number): Program {
    return this.programs.find(p => p.id === id);
  }

  private findCommunication(id: number): Communication {
    return this.communications.find(c => c.id === id);
  }

  private findProgramConfigurations(id): ProgramConfiguration[] {
    return this.programConfigurations.filter(pc => {
      if (pc.communication.id === id) {
        console.log(pc, 'Program: ', typeof(pc.program));
        if (typeof(pc.program) == 'number') {
          const programId = <number> pc.program;
          pc.program = this.findProgram(programId);
        }
        return true;
      }
       
    });
  }

  private addProgramConfiguration(programConfiguration: ProgramConfiguration): void {
    
    this.programConfigurationService.createProgramConfiguration(programConfiguration)
          .then(programConfiguration => console.log('addProgramConfiguration:', programConfiguration, this.programConfigurations))
          .catch(error =>  console.log('addProgramConfiguration error: ', error));
  }

  private updateProgramConfiguration(programConfiguration: ProgramConfiguration): void {
    
    this.programConfigurationService.updateProgramConfiguration(programConfiguration)
          .then(programConfiguration => console.log('updateProgramConfiguration:', programConfiguration, this.programConfigurations))
          .catch(error =>  console.log('updateProgramConfiguration error: ', error));
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

export class CommunicationSortCriteria {
  sortColumn: string;
  sortDirection: string;
}