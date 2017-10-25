import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'date-eff-exp',
  template: `
    <div *ngIf="i !== lastPgmConfigRow" class="flex-justify-center">{{dateValue}}</div>
    <div *ngIf="i === lastPgmConfigRow" class="flex-justify-center">{{dateValue}}</div>
  `,
  // https://tutorialzine.com/2015/09/quick-tip-the-simplest-way-to-center-elements-vertically-and-horizontally
  styles: [
    '.flex-justify-center {display: flex; justify-content: center; align-items: center;}'
  ]
})
// *ngIf="i !== lastPgmConfigRow"><span>{{pc.effective}}</span>
// *ngIf="i === lastPgmConfigRow">{{pc.effective}}
export class DateEffExpComponent implements OnInit {

  @Input() name: string;
  @Input() dateType: string;
  @Input() dateValue: string;
  @Input() i: number;
  @Input() lastPgmConfigRow: number;

  constructor() { }

  ngOnInit() {
  }

}
