import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { AddProgramComponent } from '../modal/addprogram/addprogram.component';

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

  addNewProgram(newProgram: Program): void {

    if (newProgram.id === undefined) {
      newProgram.id = this.programs.length + 1;
    }

    this.programService.create(newProgram)
      .then(program => {
        console.log('addNewProgram: ', program);
        this.programs.push(program);
      })
      .catch(error => {
          console.log('addNewProgram error: ', error);
      });
  
  }

  private addNewProgramModal() {
    const modalRef = this.modalService.open(AddProgramComponent);
    const modalComp: AddProgramComponent  = modalRef.componentInstance;

    //modalComp.name = 'Add New Program';
    modalComp.nextId = this.programs.length + 1; // Programs id are not auto-generated in the DB

    modalRef.result.then((result) => {
      if (result.resultTxt == modalComp.SAVESUCCESS) {
        console.log('addNewProgram result: ', result.resultObj);
        this.closeResult = `Closed with: ${result.resultTxt}`;
        this.addNewProgram(result.resultObj);
      } else {
        this.closeResult = `Closed with: ${result}`;
      }
      console.log('addNewProgram result: ', this.closeResult);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log('addNewProgram result: ', this.closeResult);
    });    
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