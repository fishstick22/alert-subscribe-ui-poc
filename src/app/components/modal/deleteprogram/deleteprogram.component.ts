import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Program }         from 'app/model/program';

@Component({
  selector: 'app-deleteprogram',
  templateUrl: './deleteprogram.component.html',
  styleUrls: ['./deleteprogram.component.css']
})
export class DeleteProgramComponent implements OnInit {

  @Input() program: Program;

  public SAVESUCCESS: string = 'Close on succesful save';

  constructor(public deleteProgramModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log('DeleteProgramComponent init: ' + this.program);
  }

  deleteProgram() {
    console.log('DeleteProgramComponent save');

    this.deleteProgramModal.close({resultTxt: this.SAVESUCCESS, resultObj: this.program});
  }

}
