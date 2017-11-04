import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Program }         from 'app/model/program';

@Component({
  selector: 'app-addprogram',
  templateUrl: './addprogram.component.html',
  styleUrls: ['./addprogram.component.scss']
})
export class AddProgramComponent implements OnInit {

  @Input() programId;

  public SAVESUCCESS: string = 'Close on succesful save';

  program: Program;

  constructor(public addProgramModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.program = {id: this.programId, name: undefined, description: undefined, programConfiguration: [] };
    console.log('AddProgramComponent init: ' + this.program);
  }

  saveProgram() {
    console.log('AddProgramComponent save');

    this.addProgramModal.close({resultTxt: this.SAVESUCCESS, resultObj: this.program});
  }
}
