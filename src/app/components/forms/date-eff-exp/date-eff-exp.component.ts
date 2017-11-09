import { Component, OnInit, Input,
         Output, EventEmitter }     from '@angular/core';
import { DatepickerPopupComponent } from 'app/components/forms/datepicker-popup/datepicker-popup.component';
import { ProgramConfiguration }     from 'app/model/program-configuration';

@Component({
  selector: 'app-date-eff-exp',
  template: `
    <div *ngIf="!lastConfigRow">
      <!-- not the last (new) row, this could be the current effective row -->

      <div *ngIf="dateType === 'effective'" class="flex-justify-center">
        <!-- the effective date of the current effective row -->
        <input class="form-control form-control-sm" value="{{progConfig.effective}}" readonly>
      </div>

      <div *ngIf="dateType === 'expiration'" class="flex-justify-center">
        <!-- the expiration date of the current/previous row -->
        <input class="form-control form-control-sm" value="{{progConfig.expiration}}" readonly>
      </div>
    </div>

    <div *ngIf="lastConfigRow" >
      <!-- this _is_ the last (new) row that will be inserted -->

      <div *ngIf="dateType === 'effective'" class="flex-justify-center">
        <!-- set the effective date for the new row -->
        <app-datepicker-popup [dateValue]="progConfig.effective"
          (newDateValue)="updateDateValue($event)"></app-datepicker-popup></div>

      <div *ngIf="dateType === 'expiration'" class="flex-justify-center">
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

  @Input() lastConfigRow: boolean;

  @Output() newDateValue = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  updateDateValue(newDate) {
    console.log('DateEffExpComponent updateDateValue: ', newDate.newDateValue);
    this.newDateValue.emit(newDate.newDateValue);
  }
}
