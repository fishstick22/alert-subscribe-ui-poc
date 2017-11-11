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

  newProgramConfig: ProgramConfiguration;
  prevProgramConfig: ProgramConfiguration;

  lastProgramConfigRow: number;
  configureState: 'start' | 'pick' | 'configure' | 'save';

  programDropEnabled: boolean = false;

  selectedRow: number;

  constructor(public configureProgramModal: NgbActiveModal) { }

  ngOnInit() {
    console.log('ProgramConfigComponent onInit...');
    console.log(this.program);
    console.log(this.communications);
    console.log(this.programConfigurations);

    this.displayCommStartEmpty = true;
    this.displayComm = [];
    this.configureState = 'start';
  }

  addProgramConfig(communication?: Communication) {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    if (this.newProgramConfig && this.configureState === 'pick') {
      this.newProgramConfig.communication = communication;
      this.configureState = 'configure';
    }

    if (this.configureState === 'start') {
      this.newProgramConfig = new ProgramConfiguration();
      this.newProgramConfig.effective = tomorrow.getFullYear() + '-' + (tomorrow.getMonth() + 1) + '-' + tomorrow.getDate();
      this.newProgramConfig.expiration = '9999-12-31';
      this.newProgramConfig.program = this.program;
      this.newProgramConfig.communication = new Communication();
      this.lastProgramConfigRow = this.programConfigurations.length;
      this.programConfigurations[this.programConfigurations.length] = this.newProgramConfig;
      this.configureState = 'pick';
      this.programDropEnabled = true;
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
      newProgramConfig: this.newProgramConfig
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
  newProgramConfig: ProgramConfiguration;
}

