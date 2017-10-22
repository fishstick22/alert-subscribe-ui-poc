import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Program }               from './../../../model/program';
import { ProgramConfiguration }  from './../../../model/program-configuration';
import { Communication }         from './../../../model/communication';

@Component({
  selector: 'app-configure-program-via-communication',
  templateUrl: './configure-program-via-communication.component.html',
  styleUrls: ['./configure-program-via-communication.component.css']
})
export class ConfigureProgramViaCommunicationComponent implements OnInit {

  @Input() communication: Communication;
  @Input() programs: Program[];
  @Input() programConfigurations: ProgramConfiguration[];
  
  public SAVESUCCESS: string = 'Close on succesful save';

  program: Program;
  programConfiguration: ProgramConfiguration;
  selectedValue: number;

  constructor(public configureProgramModal: NgbActiveModal) { }

  ngOnInit() {
    console.log('ConfigureProgramViaCommunicationComponent init: ');
    console.log(this.communication);
    console.log(this.programConfigurations[0]);
    // get the list of programs to populate the dropdown, check if there are progConfig already
    if(this.programConfigurations[0] && this.programConfigurations[0].program) {
      this.selectedValue = this.programConfigurations[0].program.id;
    } 
    
  }

  saveProgramConfiguration() {
    console.log('ConfigureProgramViaCommunicationComponent save');

    this.configureProgramModal.close({resultTxt: this.SAVESUCCESS, resultObj: this.program});
  }
}
