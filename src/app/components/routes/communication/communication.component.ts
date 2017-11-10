import { Component, OnInit }           from '@angular/core';
import { NgbModal, ModalDismissReasons,
         NgbModalOptions }             from '@ng-bootstrap/ng-bootstrap';

import { ClientConfigByCommComponent,
         ClientConfigModalResult }     from 'app/components/modal/client-config-by-comm/client-config-by-comm.component';
import { ProgramConfigByCommComponent,
         ProgramConfigModalResult }    from 'app/components/modal/program-config-by-comm/program-config-by-comm.component';
//
import { Communication,
         CommunicationSortCriteria,
         CommunicationConfigAction }   from 'app/classes/model/communication';
import { Program }                     from 'app/classes/model/program';
import { ProgramConfiguration }        from 'app/classes/model/program-configuration';
import { Client }                      from 'app/classes/model/client';
import { ClientConfiguration }         from 'app/classes/model/client-configuration';

import { DataApiService }              from 'app/services/data-api/data-api.service';

@Component({
  // selector: 'app-communication', selector not needed on routed components
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent implements OnInit {

  communications: Communication[];
  programs: Program[];
  programConfigurations: ProgramConfiguration[];
  clients: Client[];
  clientConfigurations: ClientConfiguration[];
  displayComm: Communication[];
  displayCommStartEmpty: boolean;

  selectedRow: number;
  closeResult: string;

  constructor(
    private dataApiService: DataApiService,
    private modalService: NgbModal
  ) { }

  async ngOnInit() {
    console.log('CommunicationComponent ngOnInit...');

    await this.getCommunications();
    this.getPrograms();
    this.getProgramConfigurations();
    this.getClients();
    this.getClientConfigurations();

    this.displayCommStartEmpty = false;
    this.displayComm = this.communications;

    console.log('CommunicationComponent ngOnInit', this.communications);
  }

  async getCommunications() {
    try {
      this.communications = await this.dataApiService.getCommunications();
    } catch (error) {
      console.log('getCommunications error: ', error);
    }
  }

  getPrograms(): void {
    this.dataApiService.getPrograms()
      .then(p => this.programs = p)
      .catch(error => console.log('getPrograms error: ', error));
  }

  getProgramConfigurations(): void {
    this.dataApiService.getProgramConfigurations()
      .then(pc => this.programConfigurations = pc)
      .catch (error => console.log('getProgramConfigurations error: ', error));
  }

  getClients(): void {
    this.dataApiService.getClients()
      .then(c => this.clients = c)
      .catch(error => console.log('getClients error: ', error));
  }

  getClientConfigurations(): void {
    this.dataApiService.getClientConfigurations()
      .then(cc => this.clientConfigurations = cc)
      .catch (error => console.log('getClientConfigurations error: ', error));
  }

  private configureCommunication(commConfigAction: CommunicationConfigAction) {
    if (commConfigAction.configType === 'program') {
      this.configureProgramModal(commConfigAction.commId);
    }
    if (commConfigAction.configType === 'clients') {
      this.configureClientModal(commConfigAction.commId);
    }
  }

  private configureClientModal(commId) {
    const modalOpts: NgbModalOptions = {
      size: 'lg'
    };
    const modalRef = this.modalService.open(ClientConfigByCommComponent, modalOpts);
    const modalComp: ClientConfigByCommComponent  = modalRef.componentInstance;
    const selectedComm: Communication  = this.findCommunication(commId);
    // modalComp.name = 'Configure Clients';
    modalComp.communication = selectedComm;
    modalComp.clients = this.clients;
    modalComp.clientConfigurations = this.findClientConfigurations(selectedComm);

    modalRef.result.then((result) => {
      if (result.resultTxt === modalComp.SAVESUCCESS) {
        console.log('configureClientModal result: ', result.modalResult);
        this.closeResult = `Closed with: ${result.resultTxt}`;
        if (result.modalResult) {
          const modalResult: ClientConfigModalResult = result.modalResult;
          // if (modalResult.prevClientConfig) {
          //   this.updateClientConfiguration(modalResult.prevClientConfig);
          // }
          if (modalResult.newClientConfig) {
            this.addClientConfiguration(modalResult.newClientConfig);
          }
        } else {
          // this would be some kind of exception
          console.log('CommunicationComponent configureProgramModal bad result: ', result.modalResult);
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

  private setClickedRow(index) {
    this.selectedRow = index;
  }

  private configureProgramModal(commId) {
    const modalOpts: NgbModalOptions = {
      size: 'lg'
    };
    const modalRef = this.modalService.open(ProgramConfigByCommComponent, modalOpts);
    const modalComp: ProgramConfigByCommComponent  = modalRef.componentInstance;

    // modalComp.name = 'Configure Program';
    modalComp.communication = this.findCommunication(commId);
    modalComp.programs = this.programs;
    modalComp.programConfigurations = this.findProgramConfigurations(commId);

    modalRef.result.then((result) => {
      if (result.resultTxt === modalComp.SAVESUCCESS) {
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
      console.log('addNewProgramConfig result: ', this.closeResult);
    });
  }

  private findClient(id: number): Client {
    return this.clients.find(c => c.id === id);
  }

  private findProgram(id: number): Program {
    return this.programs.find(p => p.id === id);
  }

  private findCommunication(id: number): Communication {
    return this.communications.find(c => c.id === id);
  }

  private findClientConfigurations(selectedComm: Communication): ClientConfiguration[] {
    return this.clientConfigurations.filter(cc => {
      if (typeof(cc.communication) === 'number') {
        if (cc.communication === selectedComm.id) {
          cc.communication = selectedComm;
          if (typeof(cc.client) === 'number') {
            cc.client = this.findClient(<number> cc.client);
          }
          return true;
        } else { return false; }
      } else if (cc.communication.id === selectedComm.id) {
        if (typeof(cc.client) === 'number') {
          cc.client = this.findClient(<number> cc.client);
        }
        return true;
      }
    });
  }

  private addClientConfiguration(clientConfiguration: ClientConfiguration): void {
    this.dataApiService.createClientConfiguration(clientConfiguration)
      .then(pc => console.log('addClientConfiguration:', clientConfiguration, this.programConfigurations))
      .catch(error =>  console.log('addClientConfiguration error: ', error));
  }

  private findProgramConfigurations(id): ProgramConfiguration[] {
    return this.programConfigurations.filter(pc => {
      if (pc.communication.id === id) {
        console.log(pc, 'Program: ', typeof(pc.program));
        if (typeof(pc.program) === 'number') {
          const programId = <number> pc.program;
          pc.program = this.findProgram(programId);
        }
        return true;
      }
    });
  }

  private addProgramConfiguration(programConfiguration: ProgramConfiguration): void {
    this.dataApiService.createProgramConfiguration(programConfiguration)
      .then(pc => console.log('addProgramConfiguration:', programConfiguration, this.programConfigurations))
      .catch(error =>  console.log('addProgramConfiguration error: ', error));
  }

  private updateProgramConfiguration(programConfiguration: ProgramConfiguration): void {
    this.dataApiService.updateProgramConfiguration(programConfiguration)
      .then(pc => console.log('updateProgramConfiguration:', programConfiguration, this.programConfigurations))
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
