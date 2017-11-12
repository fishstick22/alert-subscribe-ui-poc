import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Program }                  from 'app/classes/model/program';
import { ProgramConfiguration }     from 'app/classes/model/program-configuration';
import { Communication }            from 'app/classes/model/communication';

@Component({
  selector: 'app-program-config',
  templateUrl: './program-config.component.html',
  styleUrls: ['./program-config.component.scss']
})
export class ProgramConfigComponent implements OnInit {

  @Input() program: Program;
  @Input() communications: Communication[];

  @Input() programConfigurations: ProgramConfiguration[];

  public SAVESUCCESS: string = 'Close on succesful save';

  displayComm: Communication[];
  displayCommStartEmpty: boolean;
  supressComm: number[];

  newProgramConfig: ProgramConfiguration;
  prevProgramConfig: ProgramConfiguration;
  newProgramConfigs: ProgramConfiguration[];

  lastProgramConfigRow: number;
  configureState: 'start' | 'pick' | 'continue' | 'configure' | 'save';

  programDropEnabled: boolean = false;

  selectedRow: number;

  today = new Date();
  tomorrow = new Date();

  constructor(public configureProgramModal: NgbActiveModal) { }

  ngOnInit() {
    console.log('ProgramConfigComponent onInit...');
    console.log(this.program);
    console.log(this.communications);
    console.log(this.programConfigurations);

    this.displayCommStartEmpty = true;
    this.displayComm = [];
    this.newProgramConfigs = [];
    this.tomorrow.setDate(this.today.getDate() + 1);
    this.configureState = 'start';

    this.supressComm = this.findExistingComms();
  }

  findExistingComms(): number[] {
    const existing: number[] = [];
    for (let i = 0; i < this.programConfigurations.length; i++) {
      existing.push(this.programConfigurations[i].communication.id);
    }
    return existing;
  }

  addProgramConfig(communication?: Communication) {

    if (this.newProgramConfig && this.configureState === 'pick') {
      this.newProgramConfig.communication = communication;
      // this.newProgramConfigs[this.newProgramConfigs.length] = this.newProgramConfig;
      this.supressComm.push(communication.id);
      // this.configureState = 'continue';
      // this.newProgramConfig = null;
      this.programDropEnabled = false;
    }

    if (this.configureState === 'start' || this.configureState === 'continue') {
      // first time through
      this.lastProgramConfigRow = this.programConfigurations.length;
      if (this.lastProgramConfigRow === 0) {
        this.newProgramConfig = new ProgramConfiguration();
        this.newProgramConfig.effective =  // TODO shared util method
           this.tomorrow.getFullYear() + '-' +
          (this.tomorrow.getMonth() + 1) + '-' +
           this.tomorrow.getDate();
      } else {
        // clone setting from previous config row
        this.prevProgramConfig = this.programConfigurations[this.lastProgramConfigRow - 1];
        this.newProgramConfig = new ProgramConfiguration(this.prevProgramConfig);
        this.newProgramConfig.effective = this.prevProgramConfig.effective;
      }
      this.programConfigurations[this.programConfigurations.length] = this.newProgramConfig;
      this.newProgramConfigs[this.newProgramConfigs.length] = this.newProgramConfig;
      this.newProgramConfig.expiration = '9999-12-31';
      this.newProgramConfig.program = this.program;

      this.newProgramConfig.communication = new Communication();

      this.configureState = 'pick';
      this.programDropEnabled = true;
    } else {
      if (this.newProgramConfig && this.configureState === 'pick') {
        this.configureState = 'continue';
      }
    }
  }

  communicationDrop(dragEvent) {
    console.log('ProgramConfigComponent communicationDrop: ', dragEvent);
    if (dragEvent.dragData && typeof(dragEvent.dragData.id) === 'number' ) {
      this.addProgramConfig(this.findCommunication(dragEvent.dragData.id));
    }
  }

  updateDateValue(newDateValue, cc: ProgramConfiguration, dateType: string) {
    console.log('ProgramConfigComponent updateDateValue: ', newDateValue, cc, dateType);
    if (dateType === 'effective') {
      cc.effective = newDateValue;
    }
    if (dateType === 'expiration') {
      cc.expiration = newDateValue;
    }
  }

  saveProgramConfiguration() {
    console.log('ProgramConfigComponent save');
    console.log(this.newProgramConfig, ' program id: ', this.program);

    const modalResult: ProgramConfigModalResult = {
      newProgramConfigs: this.newProgramConfigs
    };

    this.configureProgramModal.close({resultTxt: this.SAVESUCCESS, modalResult: modalResult});
  }

  private findCommunication(id): Communication {
    return this.communications.find(c => c.id === id);
  }

  private setClickedRow(index) {
    this.selectedRow = index;
  }
}
export class ProgramConfigModalResult {
  newProgramConfigs: ProgramConfiguration[];
}

