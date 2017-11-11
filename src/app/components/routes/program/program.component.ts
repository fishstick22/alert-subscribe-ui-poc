import { Component, OnInit }        from '@angular/core';
import { NgbModal, ModalDismissReasons,
         NgbModalOptions }          from '@ng-bootstrap/ng-bootstrap';

import { AddProgramComponent }      from 'app/components/modal/addprogram/addprogram.component';
import { EditProgramComponent }     from 'app/components/modal/editprogram/editprogram.component';
import { DeleteProgramComponent }   from 'app/components/modal/deleteprogram/deleteprogram.component';
import { ProgramConfigComponent,
         ProgramConfigModalResult } from 'app/components/modal/program-config/program-config.component';

import { Program,
         ProgramConfigAction }      from 'app/classes/model/program';
import { ProgramConfiguration, }    from 'app/classes/model/program-configuration';
import { Communication }            from 'app/classes/model/communication';

import { DataApiService }           from 'app/services/data-api/data-api.service';

@Component({
  // selector: 'app-program', selector not needed on routed components
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {

  programs: Program[];
  programConfigurations: ProgramConfiguration[];
  communications: Communication[];

  selectedRow: number;
  closeResult: string;

  constructor(
    private dataApiService: DataApiService,
    private modalService: NgbModal
  ) { }

  async ngOnInit() {
    console.log('ProgramComponent ngOnInit...');
    await this.getPrograms();
    await this.getProgramConfigurations();
    await this.getCommunications();
  }

  async getPrograms() {
    try {
      this.programs = await this.dataApiService.getPrograms();
    } catch (error) {
      console.log('getPrograms error: ', error);
    }
  }

  async getProgramConfigurations() {
    try {
      this.programConfigurations = await this.dataApiService.getProgramConfigurations();
    } catch (error) {
      console.log('getProgramConfigurations error: ', error);
    }
  }

  async getCommunications() {
    try {
      this.communications = await this.dataApiService.getCommunications();
    } catch (error) {
      console.log('getCommunications error: ', error);
    }
  }

  addProgram(program: Program): void {

    if (program.id === undefined) {
      program.id = this.programs.length + 1;
    }

    this.dataApiService.createProgram(program)
      .then(p => console.log('addNewProgram: ', program, this.programs))
      .catch(error =>  console.log('addNewProgram error: ', error));

  }

  editProgram(program: Program): void {

    this.dataApiService.updateProgram(program)
      .then(p => console.log('editProgram: ', program))
      .catch(error =>  console.log('editProgram error: ', error));

  }

  deleteProgram(program: Program): void {

    this.dataApiService.deleteProgram(program)
      .then(result => {
        console.log('deleteProgram: ', program, this.programs);
      })
      .catch(error => {
          console.log('deleteProgram error: ', error);
      });

  }

  private setClickedRow(index) {
    this.selectedRow = index;
  }

  configureProgram(progConfigAction: ProgramConfigAction) {
    if (progConfigAction.configType === 'edit') {
      this.editProgramModal(progConfigAction.progId);
    }
    if (progConfigAction.configType === 'delete') {
      this.deleteProgramModal(progConfigAction.progId);
    }
    if (progConfigAction.configType === 'communications') {
      this.configureProgramModal(progConfigAction.progId);
    }
  }

  addProgramModal() {
    const modalRef = this.modalService.open(AddProgramComponent);
    const modalComp: AddProgramComponent  = modalRef.componentInstance;

    // modalComp.name = 'Add New Program';
    modalComp.programId = this.programs.length + 1; // Programs id are not auto-generated in the DB

    modalRef.result.then((result) => {
      if (result.resultTxt === modalComp.SAVESUCCESS) {
        console.log('addNewProgram result: ', result.resultObj);
        this.closeResult = `Closed with: ${result.resultTxt}`;
        this.addProgram(result.resultObj);
      } else {
        this.closeResult = `Closed with: ${result}`;
      }
      this.setClickedRow(null);
      console.log('addNewProgram result: ', this.closeResult);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.setClickedRow(null);
      console.log('addNewProgram result: ', this.closeResult);
    });
  }

  editProgramModal(programId) {
    const modalRef = this.modalService.open(EditProgramComponent);
    const modalComp: EditProgramComponent  = modalRef.componentInstance;

    // modalComp.name = 'Edit Program';
    modalComp.program = this.findProgram(programId);

    modalRef.result.then((result) => {
      if (result.resultTxt === modalComp.SAVESUCCESS) {
        console.log('editProgram result: ', result.resultObj);
        this.closeResult = `Closed with: ${result.resultTxt}`;
        this.editProgram(result.resultObj);
      } else {
        this.closeResult = `Closed with: ${result}`;
      }
      this.setClickedRow(null);
      console.log('editProgram result: ', this.closeResult);
    }, (reason) => {
      this.setClickedRow(null);
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log('editProgram result: ', this.closeResult);
    });
  }

  deleteProgramModal(programId) {
    const modalRef = this.modalService.open(DeleteProgramComponent);
    const modalComp: DeleteProgramComponent  = modalRef.componentInstance;

    // modalComp.name = 'Delete Program';
    modalComp.program = this.findProgram(programId);

    modalRef.result.then((result) => {
      if (result.resultTxt === modalComp.SAVESUCCESS) {
        console.log('deleteProgram result: ', result.resultObj);
        this.closeResult = `Closed with: ${result.resultTxt}`;
        this.deleteProgram(result.resultObj);
      } else {
        this.closeResult = `Closed with: ${result}`;
      }
      this.setClickedRow(null);
      console.log('deleteProgram result: ', this.closeResult);
    }, (reason) => {
      this.setClickedRow(null);
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log('deleteProgram result: ', this.closeResult);
    });
  }

  configureProgramModal(commId) {
    const modalOpts: NgbModalOptions = {
      size: 'lg'
    };
    const modalRef = this.modalService.open(ProgramConfigComponent, modalOpts);
    const modalComp: ProgramConfigComponent  = modalRef.componentInstance;
    const selectedProgram: Program  = this.findProgram(commId);
    // modalComp.name = 'Configure Clients';
    modalComp.program = selectedProgram;
    modalComp.communications = this.communications;
    modalComp.programConfigurations = this.findProgramConfigurations(selectedProgram);

    modalRef.result.then((result) => {
      if (result.resultTxt === modalComp.SAVESUCCESS) {
        console.log('configureProgramModal result: ', result.modalResult);
        this.closeResult = `Closed with: ${result.resultTxt}`;
        if (result.modalResult) {
          const modalResult: ProgramConfigModalResult = result.modalResult;
          // if (modalResult.prevProgConfig) {
          //   this.updateProgramConfiguration(modalResult.prevProgConfig);
          // }
          if (modalResult.newProgramConfig) {
            this.addProgramConfiguration(modalResult.newProgramConfig);
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

  private findProgram(id): Program {
    return this.programs.find(p => p.id === id);
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
