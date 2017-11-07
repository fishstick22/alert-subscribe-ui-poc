import { Component, OnInit }      from '@angular/core';
import { NgbModal,
         ModalDismissReasons }    from '@ng-bootstrap/ng-bootstrap';

import { AddProgramComponent }    from 'app/components/modal/addprogram/addprogram.component';
import { EditProgramComponent }   from 'app/components/modal/editprogram/editprogram.component';
import { DeleteProgramComponent } from 'app/components/modal/deleteprogram/deleteprogram.component';

import { Program,
         ProgramConfigAction }    from 'app/model/program';
import { DataApiService }         from 'app/services/data-api/data-api.service';

@Component({
  // selector: 'app-program', selector not needed on routed components
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {

  programs: Program[];
  selectedRow: number;
  closeResult: string;

  constructor(
    private dataApiService: DataApiService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    console.log('ProgramComponent ngOnInit...');
    this.dataApiService.getPrograms()
      .then(programs => this.programs = programs)
      .catch(error => console.log('getPrograms error: ', error));
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

  private findProgram(id): Program {
    return this.programs.find(p => p.id === id);
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
