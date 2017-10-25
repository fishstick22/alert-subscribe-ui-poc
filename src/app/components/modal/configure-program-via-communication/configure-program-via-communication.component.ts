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
      this.addProgramConfig(null);
    } else {
      let indxOfLast = this.programConfigurations.length-1;
      if(this.programConfigurations[indxOfLast] && this.programConfigurations[indxOfLast].program) {
        this.prevPgmConfig = this.programConfigurations[indxOfLast];
        this.selectedProgram = this.prevPgmConfig.program.id;
        this.addProgramConfig(this.programConfigurations[indxOfLast])
      }
    }   
  }

  addProgramConfig(lastPgmConfig: ProgramConfiguration) {

    this.newPgmConfig = new ProgramConfiguration();

    let today = new Date;
    if(lastPgmConfig) {
      // adding a new row, expiring the previous, copying the previous values
      lastPgmConfig.expiration = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      this.newPgmConfig.name               = lastPgmConfig.name;
      this.newPgmConfig.chanEmailPriority  = lastPgmConfig.chanEmailPriority;
      this.newPgmConfig.chanIvrPriority    = lastPgmConfig.chanIvrPriority;
      this.newPgmConfig.chanSmsPriority    = lastPgmConfig.chanSmsPriority;
      this.newPgmConfig.chanMailPriority   = lastPgmConfig.chanMailPriority;
      this.newPgmConfig.chanMobilePriority = lastPgmConfig.chanMobilePriority;
      this.newPgmConfig.chanMandatory      = lastPgmConfig.chanMandatory;

    } else {
      // this is a first-time row for this communication, set some defaults
      this.newPgmConfig.chanEmailPriority = 0;
      this.newPgmConfig.chanIvrPriority = 0;
      this.newPgmConfig.chanSmsPriority = 0;
      this.newPgmConfig.chanMailPriority = 0;
      this.newPgmConfig.chanMobilePriority = 0;
      this.newPgmConfig.chanMandatory = 'No';

    }

    this.newPgmConfig.effective = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    this.newPgmConfig.expiration = '9999-12-31';

    this.lastPgmConfigRow = this.programConfigurations.length;
    this.programConfigurations[this.programConfigurations.length] = this.newPgmConfig;
 
  }

  saveProgramConfiguration() {
    console.log('ConfigureProgramViaCommunicationComponent save');
    console.log(this.newPgmConfig, ' program id: ', this.selectedProgram);

    this.newPgmConfig.program = this.findProgram(this.selectedProgram);
    this.newPgmConfig.communication = this.communication;

    const resultObj = {
      prev: this.prevPgmConfig,
      new: this.newPgmConfig
    };

    this.configureProgramModal.close({resultTxt: this.SAVESUCCESS, resultObj: resultObj});
  }

  private findProgram(id): Program {
    return this.programs.find(p => p.id === id);
  }

}
