import { Component, OnInit, Input, 
         Output, EventEmitter }     from '@angular/core';
import { NgbDateStruct }            from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-datepicker-popup',
  template: `
  <div class="col-xs-2">
    <input class="form-control form-control-sm" placeholder="yyyy-mm-dd" (click)="d.toggle()" 
           name="dp" [(ngModel)]="dateModel" (ngModelChange)="saveDate($event)" ngbDatepicker #d="ngbDatepicker">
<!--
    <button class="input-group-addon" (click)="d.toggle()"  type="button">
      <img src="../../../../assets/calendar-icon.svg" style="width: 1.2rem; height: 1rem; cursor: pointer;"/>
    </button>
-->
   </div>

  `,
  styles: [
    'input { width: 80px; }',
    'input:focus { width: 82px; }'
  ]
})
export class DatepickerPopupComponent implements OnInit {

  @Input() dateValue: string;
  @Output() newDateValue = new EventEmitter<any>();

  dateModel: NgbDateStruct;
  
  constructor() { }

  ngOnInit() {
    console.log('DatePickerPopup datevalue: ', this.dateValue);
    var inputDate = new Date(this.dateValue);
    this.dateModel = { day: inputDate.getUTCDate(), month: inputDate.getUTCMonth() + 1, year: inputDate.getUTCFullYear()};
  }

  saveDate(newDateValue: NgbDateStruct) {
    const newDate: string = newDateValue.year+ '-'+ newDateValue.month+ '-'+ newDateValue.day
    console.log('DatepickerPopupComponent saveDate: ', newDate );

    this.newDateValue.emit({
      newDateValue: newDate
    })
  }

}
