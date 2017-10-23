import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { AddProgramComponent }    from '../modal/addprogram/addprogram.component';
import { EditProgramComponent }   from '../modal/editprogram/editprogram.component';
import { DeleteProgramComponent } from '../modal/deleteprogram/deleteprogram.component';

import { Program }                from './../../model/program';
import { ProgramService }         from './../../services/program.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  programs: Program[];
  closeResult: string;

  constructor(private programService: ProgramService, private modalService: NgbModal) { }

  ngOnInit(): void {
    console.log('ProgramComponent ngOnInit...');
    this.programService.getPrograms()
      .then(programs => this.programs = programs)
      .catch(error => console.log('getPrograms error: ', error));
  }

  addProgram(program: Program): void {

    if (program.id === undefined) {
      program.id = this.programs.length + 1;
    }

    this.programService.createProgram(program)
      .then(program => console.log('addNewProgram: ', program, this.programs))
      .catch(error =>  console.log('addNewProgram error: ', error));
  
  }

  editProgram(program: Program): void {
    
    this.programService.updateProgram(program)
      .then(program => console.log('editProgram: ', program))
      .catch(error =>  console.log('editProgram error: ', error));
  
  }

  deleteProgram(program: Program): void {
    
    this.programService.deleteProgram(program)
      .then(result => {
        // not sure why have to do this on this array, 
        //it's not a copy, should be a reference
        //this.programs = this.removeProgram(program);
        // Oh, because boy genius used filter to create a new array instance
        console.log('deleteProgram: ', program, this.programs);
      })
      .catch(error => {
          console.log('deleteProgram error: ', error);
      });
  
  }

  private addProgramModal() {
    const modalRef = this.modalService.open(AddProgramComponent);
    const modalComp: AddProgramComponent  = modalRef.componentInstance;

    //modalComp.name = 'Add New Program';
    modalComp.programId = this.programs.length + 1; // Programs id are not auto-generated in the DB

    modalRef.result.then((result) => {
      if (result.resultTxt == modalComp.SAVESUCCESS) {
        console.log('addNewProgram result: ', result.resultObj);
        this.closeResult = `Closed with: ${result.resultTxt}`;
        this.addProgram(result.resultObj);
      } else {
        this.closeResult = `Closed with: ${result}`;
      }
      console.log('addNewProgram result: ', this.closeResult);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log('addNewProgram result: ', this.closeResult);
    });    
  }

  private editProgramModal(programId) {
    const modalRef = this.modalService.open(EditProgramComponent);
    const modalComp: EditProgramComponent  = modalRef.componentInstance;

    //modalComp.name = 'Edit Program';
    modalComp.program = this.findProgram(programId);

    modalRef.result.then((result) => {
      if (result.resultTxt == modalComp.SAVESUCCESS) {
        console.log('editProgram result: ', result.resultObj);
        this.closeResult = `Closed with: ${result.resultTxt}`;
        this.editProgram(result.resultObj);
      } else {
        this.closeResult = `Closed with: ${result}`;
      }
      console.log('editProgram result: ', this.closeResult);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log('editProgram result: ', this.closeResult);
    });    
  }

  private deleteProgramModal(programId) {
    const modalRef = this.modalService.open(DeleteProgramComponent);
    const modalComp: DeleteProgramComponent  = modalRef.componentInstance;

    //modalComp.name = 'Delete Program';
    modalComp.program = this.findProgram(programId);

    modalRef.result.then((result) => {
      if (result.resultTxt == modalComp.SAVESUCCESS) {
        console.log('deleteProgram result: ', result.resultObj);
        this.closeResult = `Closed with: ${result.resultTxt}`;
        this.deleteProgram(result.resultObj);
      } else {
        this.closeResult = `Closed with: ${result}`;
      }
      console.log('deleteProgram result: ', this.closeResult);
    }, (reason) => {
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