import { Component, OnInit, Input, 
         Output, EventEmitter }     from '@angular/core';
import { DatepickerPopupComponent } from '../datepicker-popup/datepicker-popup.component';
import { ProgramConfiguration }     from './../../../model/program-configuration'

@Component({
  selector: 'date-eff-exp',
  template: `
    <div *ngIf="i !== lastPgmConfigRow">
      <!-- not the last (new) row, this could be the current effective row -->

      <div *ngIf="dateType == 'effective'" class="flex-justify-center">
        <!-- the effective date of the current effective row -->  
        {{progConfig.effective}}</div>

      <div *ngIf="dateType == 'expiration'" class="flex-justify-center">
        <!-- the expiration date of the current/previous row -->  
        {{progConfig.expiration}}</div>
    </div>

    <div *ngIf="i === lastPgmConfigRow" >
      <!-- this _is_ the last (new) row that will be inserted -->
      
      <div *ngIf="dateType == 'effective'" class="flex-justify-center">
        <!-- set the effective date for the new row --> 
        <ngbd-datepicker-popup [dateValue]="progConfig.effective"
          (newDateValue)="updateDateValue($event)"></ngbd-datepicker-popup></div>
  
      <div *ngIf="dateType == 'expiration'" class="flex-justify-center">
        <!-- the expiration date of the new row -->  
        <input class="form-control form-control-sm" value="{{progConfig.expiration}}" readonly>
      </div>
    </div>
  `,
  // https://tutorialzine.com/2015/09/quick-tip-the-simplest-way-to-center-elements-vertically-and-horizontally
  styles: [
    '.flex-justify-center {display: flex; justify-content: center; align-items: center;}',
    'input { width: 80px; }'
  ]
})
export class DateEffExpComponent implements OnInit {

  @Input() dateType: string;
  @Input() progConfig: ProgramConfiguration;
  @Input() i: number;
  @Input() lastPgmConfigRow: number;

  @Output() newDateValue = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  updateDateValue(newDate) {
    console.log('DateEffExpComponent updateDateValue: ', newDate.newDateValue);
    this.newDateValue.emit({
      newDateValue: newDate.newDateValue
    })
  }
}
