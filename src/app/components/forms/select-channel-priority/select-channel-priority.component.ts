import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectChannelPriorityComponent),
    multi: true
};
@Component({
  selector: 'select-channel-priority',
  template: `
  <div class="flex-justify-right">
    <select id="{{id}}" name="{{name}}" [(ngModel)]="value" required
      class="form-control form-control-sm" (blur)="onBlur()"
      [disabled]="i !== lastPgmConfigRow">
      <option *ngFor="let cpo of channelPriortyOpts" [ngValue]="cpo">{{cpo}}</option>
    </select>
  </div>`,
  // https://tutorialzine.com/2015/09/quick-tip-the-simplest-way-to-center-elements-vertically-and-horizontally
  styles: [
    '.flex-justify-center {display: flex; justify-content: center; align-items: center;}',
    '.flex-justify-right {display: flex; justify-content: flex-end; align-items: right;}'
  ],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class SelectChannelPriorityComponent implements OnInit, ControlValueAccessor {
  // Placeholders for the callbacks which are later providesd
  // by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  @Input() id: string;
  @Input() name: string;
  @Input() i: number;
  @Input() lastPgmConfigRow: number;

  channelPriortyOpts: number[] = [0, 1, 2, 3];

  // http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel
  // The internal data model
  private innerValue: any = '';

  constructor() { }

  ngOnInit() {
    // console.log("SelectChannelPriorityComponent ");
    // console.log("name: ", this.name);
    // console.log("priority: ", this.priority);
    // console.log("i: ", this.i);
    // console.log("lastPgmConfigRow: ", this.lastPgmConfigRow);
  }



  // get accessor
  get value(): any {
    return this.innerValue;
  }

  // set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.innerValue) {
        this.innerValue = v;
        this.onChangeCallback(v);
    }
  }

  // Set touched on blur
  onBlur() {
    this.onTouchedCallback();
  }

  // From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this.innerValue) {
        this.innerValue = value;
    }
  }

  // From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}
