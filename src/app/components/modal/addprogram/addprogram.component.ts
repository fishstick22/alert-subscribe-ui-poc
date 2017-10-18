import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Program }         from './../../../model/program';

@Component({
  selector: 'app-addprogram',
  templateUrl: './addprogram.component.html',
  styleUrls: ['./addprogram.component.css']
})
export class AddProgramComponent implements OnInit {

  @Input() nextId;
  
  public SAVESUCCESS: string = 'Close on succesful save';

  program: Program;

  constructor(public addProgramModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.program = {id: this.nextId, name: undefined, description: undefined};
    console.log('AddProgramComponent init: ' + this.program);
  }

  saveNewProgram() {
    console.log('AddProgramComponent save');

    this.addProgramModal.close({resultTxt: this.SAVESUCCESS, resultObj: this.program});
  }
}
