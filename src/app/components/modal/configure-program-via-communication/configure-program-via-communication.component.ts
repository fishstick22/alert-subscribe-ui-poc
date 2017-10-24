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

  //program: Program;
  //programConfiguration: ProgramConfiguration;
  selectedProgram: number;
  //channelPriortyOpts: number[] = [0,1,2,3];
  chanMandatoryOpts: string[] = ['No', 'Email', 'IVR', 'SMS'];
  //addingProgramConfig: boolean = false;
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
        this.selectedProgram = this.programConfigurations[indxOfLast].program.id;
        //this.program = this.programConfigurations[indxOfLast].program;
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
      this.newPgmConfig.name = lastPgmConfig.name;
      this.newPgmConfig.chanEmailPriority = lastPgmConfig.chanEmailPriority;
      this.newPgmConfig.chanIvrPriority = lastPgmConfig.chanIvrPriority;
      this.newPgmConfig.chanSmsPriority = lastPgmConfig.chanSmsPriority;
      this.newPgmConfig.chanMandatory = lastPgmConfig.chanMandatory;
      //this.newPgmConfig.program = lastPgmConfig.program;
    } else {
      // this is a first-time row for this communication, set some defaults
      this.newPgmConfig.chanEmailPriority = 0;
      this.newPgmConfig.chanIvrPriority = 0;
      this.newPgmConfig.chanSmsPriority = 0;
      this.newPgmConfig.chanMandatory = 'No';
      //this.newPgmConfig.program = new Program();
    }

    this.newPgmConfig.effective = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    this.newPgmConfig.expiration = '9999-12-31';
    //this.newPgmConfig.program = new Program();

    this.lastPgmConfigRow = this.programConfigurations.length;
    this.programConfigurations[this.programConfigurations.length] = this.newPgmConfig;
    //this.addingProgramConfig=true;
  }

  saveProgramConfiguration() {
    console.log('ConfigureProgramViaCommunicationComponent save');
    console.log(this.newPgmConfig, ' program id: ', this.selectedProgram);

    this.newPgmConfig.program = this.findProgram(this.selectedProgram);
    this.newPgmConfig.communication = this.communication;

    this.configureProgramModal.close({resultTxt: this.SAVESUCCESS, resultObj: this.newPgmConfig});
  }

  private findProgram(id): Program {
    return this.programs.find(p => p.id === id);
  }
}
