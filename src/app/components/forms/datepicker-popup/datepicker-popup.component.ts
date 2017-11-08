import { Component, OnInit, Input,
         Output, EventEmitter }     from '@angular/core';
import { NgbDateStruct }            from '@ng-bootstrap/ng-bootstrap';

// Datepicker should close when user clicks outside, tried
// https://github.com/ng-bootstrap/ng-bootstrap/issues/933
// https://github.com/arkon/ng-click-outside

@Component({
  selector: 'app-datepicker-popup',
  template: `
  <div class="col-xs-2"
    (click)="onClick($event)"
    (appClickOutside)="onClickedOutside($event, d)"
    [attachOutsideOnClick]="attachOutsideOnClick"
    [delayClickOutsideInit]="delayClickOutsideInit"
    [clickOutsideEvents]="clickOutsideEvents"
    [exclude]="exclude"
    [excludeBeforeClick]="excludeBeforeClick">

    <input name="dp" [(ngModel)]="dateModel" class="form-control form-control-sm" placeholder="yyyy-mm-dd"
           (click)="d.toggle()" (ngModelChange)="saveDate($event)" ngbDatepicker #d="ngbDatepicker"
           [required]="required">
<!--
    <button class="input-group-addon" (click)="d.toggle()"  type="button">
      <img src="assets/calendar-icon.svg" style="width: 1.2rem; height: 1rem; cursor: pointer;"/>
    </button>
-->
<!-- for debugging
    <p>inside: {{countInside}}</p>
    <p>outside: {{countOutside}}</p> -->
   </div>

  `,
  styles: [
    'input { width: 80px; }',
    'input:focus { width: 82px; }'
  ]
})
export class DatepickerPopupComponent implements OnInit {

  private countInside: number = 0;
  private countOutside: number = 0;

  private attachOutsideOnClick = true;
  private delayClickOutsideInit = false;
  private clickOutsideEvents = 'click';
  private exclude = 'ngb-datepicker, .btn-light';
  private excludeBeforeClick = false;

  @Input() dateValue: string;
  @Input() required: true;
  @Output() newDateValue = new EventEmitter<any>();

  dateModel: NgbDateStruct;

  constructor() { }

  ngOnInit() {
    console.log('DatePickerPopup datevalue: ', this.dateValue);
    const inputDate = new Date(this.dateValue);
    this.dateModel = { day: inputDate.getUTCDate(), month: inputDate.getUTCMonth() + 1, year: inputDate.getUTCFullYear()};
  }

  saveDate(newDateValue: NgbDateStruct) {
    const newDate: string =
      (newDateValue) ?
        newDateValue.year + '-' + newDateValue.month + '-' + newDateValue.day :
        '';
    console.log('DatepickerPopupComponent saveDate: ', newDate );

    this.newDateValue.emit({
      newDateValue: newDate
    });
  }

  private onClick(e: Event) {
    console.log('Clicked inside:', e);
    // this.countInside++;
  }

  private onClickedOutside(e: Event, d: any) {
    console.log('Clicked outside:', e);
    d.close();
    // this.countOutside++;
  }
}
