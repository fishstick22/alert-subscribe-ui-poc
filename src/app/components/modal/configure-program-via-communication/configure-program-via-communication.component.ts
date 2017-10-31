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

  newPgmConfig: ProgramConfiguration;
  prevPgmConfig: ProgramConfiguration;

  selectedProgram: number;
  chanMandatoryOpts: string[] = ['No', 'Email', 'IVR', 'SMS'];
  lastPgmConfigRow: number;

  constructor(public configureProgramModal: NgbActiveModal) { }

  ngOnInit() {
    console.log('ConfigureProgramViaCommunicationComponent init: ');
    console.log(this.communication);
    console.log(this.programConfigurations);
    // get the list of programs to populate the dropdown (covered in @Input() programs: Program[];)
    // check if there are progConfig already (for now just checking for first one, have to check for eff dates)
    if(this.programConfigurations.length === 0) { // no existing configs for comm
      this.addProgramConfig();
    } else {
      let indxOfLast = this.programConfigurations.length-1;
      if(this.programConfigurations[indxOfLast] && this.programConfigurations[indxOfLast].program) {
        // why? this shows up as Object when it is ProgramConfiguration
        this.prevPgmConfig = <ProgramConfiguration> this.programConfigurations[indxOfLast];
        this.selectedProgram = this.prevPgmConfig.program.id;
        this.addProgramConfig(this.programConfigurations[indxOfLast])
      }
    }   
  }

  addProgramConfig(lastPgmConfig?: ProgramConfiguration) {

    const today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    if(lastPgmConfig) {
      // adding a new row, expiring the previous, copying the previous values
      lastPgmConfig.expiration = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      this.newPgmConfig = new ProgramConfiguration(lastPgmConfig);

    } else {
      // this is a first-time row for this communication, set some defaults
      this.newPgmConfig = new ProgramConfiguration();

    }

    this.newPgmConfig.effective = tomorrow.getFullYear()+'-'+(tomorrow.getMonth()+1)+'-'+tomorrow.getDate();
    this.newPgmConfig.expiration = '9999-12-31';

    this.lastPgmConfigRow = this.programConfigurations.length;
    this.programConfigurations[this.programConfigurations.length] = this.newPgmConfig;
 
  }
  
  updateDateValue(newDate, pc: ProgramConfiguration, dateType: string) {
    console.log('ConfigureProgramViaCommunicationComponent updateDateValue: ', newDate.newDateValue, pc, dateType);
    if (dateType === 'effective') {
      pc.effective = newDate.newDateValue;
    }
    if (dateType === 'expiration') {
      pc.expiration = newDate.newDateValue;
    }
  }

  saveProgramConfiguration() {
    console.log('ConfigureProgramViaCommunicationComponent save');
    console.log(this.newPgmConfig, ' program id: ', this.selectedProgram);

    this.newPgmConfig.program = this.findProgram(this.selectedProgram);
    this.newPgmConfig.communication = this.communication;

    const modalResult: ProgramConfigModalResult = {
      prevProgConfig: this.prevPgmConfig,
      newProgConfig: this.newPgmConfig
    };

    this.configureProgramModal.close({resultTxt: this.SAVESUCCESS, modalResult: modalResult});
  }

  private findProgram(id): Program {
    return this.programs.find(p => p.id === id);
  }

}

export class ProgramConfigModalResult {
  prevProgConfig: ProgramConfiguration;
  newProgConfig: ProgramConfiguration;
}