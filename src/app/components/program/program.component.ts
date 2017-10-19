import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { AddProgramComponent }    from '../modal/addprogram/addprogram.component';
import { EditProgramComponent }   from '../modal/editprogram/editprogram.component';
import { DeleteProgramComponent } from '../modal/deleteprogram/deleteprogram.component';

import { Program }         from './../../model/program';
import { ProgramService }  from './../../services/program.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  programs: Program[] = [];
  closeResult: string;

  constructor(private programService: ProgramService, private modalService: NgbModal) { }

  ngOnInit(): void {
    console.log('ProgramComponent ngOnInit...');
    this.programService.getPrograms()
      .then(programs => {
        console.log(programs)
        this.programs = programs;
        console.log(this.programs.length);
      });

  }

  addProgram(program: Program): void {

    if (program.id === undefined) {
      program.id = this.programs.length + 1;
    }

    this.programService.create(program)
      .then(program => {
        console.log('addNewProgram: ', program);
        this.insertProgram(program);
      })
      .catch(error => {
          console.log('addNewProgram error: ', error);
      });
  
  }

  editProgram(program: Program): void {
    
    this.programService.update(program)
      .then(program => {
        console.log('editProgram: ', program);
        //
      })
      .catch(error => {
          console.log('editProgram error: ', error);
      });
  
  }

  deleteProgram(program: Program): void {
    
    this.programService.delete(program)
      .then(result => {
        console.log('deleteProgram: ', program);
        this.programs = this.removeProgram(program);
        program = null;
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

  // yeah, these are all one-liners, but I like to encapsulate these
  // implementations for reference in a prototype like this
  private findProgram(id): Program {
    return this.programs.find(p => p.id === id);
  }

  private insertProgram(program: Program): void {
    this.programs.push(program);
  }

  private removeProgram(program: Program): Program[] {
    // some reason this is returning an empty array
    //this.programs = this.programs.filter(program => program.id !== program.id);
    //program = null;
    // missing something obvious here
    // let newArray = this.programs.filter(
    //   (p : Program) => {
    //     console.log('id: ', p.id, 'prg id: ', program.id);
    //     console.log(p.id !== program.id);
    //     return p.id !== program.id;
    //   }
    // )
    // AH ok, you can't use the same variable name for the iterator and the comparison
    // DUH
    // console.log(newArray);
    // return newArray;
    return this.programs.filter(p => p.id !== program.id);
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