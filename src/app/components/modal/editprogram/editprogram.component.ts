import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Program }         from 'app/model/program';

@Component({
  selector: 'app-editprogram',
  templateUrl: './editprogram.component.html',
  styleUrls: ['./editprogram.component.scss']
})
export class EditProgramComponent implements OnInit {

  @Input() program: Program;

  public SAVESUCCESS: string = 'Close on succesful save';

  constructor(public editProgramModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log('EditProgramComponent init: ' + this.program);
  }

  saveProgram() {
    console.log('EditProgramComponent save');

    this.editProgramModal.close({resultTxt: this.SAVESUCCESS, resultObj: this.program});
  }
}
