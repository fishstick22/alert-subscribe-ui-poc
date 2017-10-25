import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'select-channel-priority',
  template: `
  <div *ngIf="i !== lastPgmConfigRow" class="flex-justify-center">{{priority}}</div>
  <div *ngIf="i === lastPgmConfigRow" class="flex-justify-right">
    <select [(ngModel)]="priority" id="name" name="name" [disabled]="i !== lastPgmConfigRow">
      <option *ngFor="let cpo of channelPriortyOpts" [ngValue]="cpo">{{cpo}}</option>
    </select>
  </div>`,
  // https://tutorialzine.com/2015/09/quick-tip-the-simplest-way-to-center-elements-vertically-and-horizontally
  styles: [
    '.flex-justify-center {display: flex; justify-content: center; align-items: center;}',
    '.flex-justify-right {display: flex; justify-content: flex-end; align-items: right;}'
  ]
})
export class SelectChannelPriorityComponent implements OnInit {

  @Input() name: string;
  @Input() priority: any[];
  @Input() i: number;
  @Input() lastPgmConfigRow: number;

  channelPriortyOpts: number[] = [0,1,2,3];

  constructor() { }

  ngOnInit() {
    // console.log("SelectChannelPriorityComponent ");
    // console.log("name: ", this.name);
    // console.log("priority: ", this.priority);
    // console.log("i: ", this.i);
    // console.log("lastPgmConfigRow: ", this.lastPgmConfigRow);
  }

}
