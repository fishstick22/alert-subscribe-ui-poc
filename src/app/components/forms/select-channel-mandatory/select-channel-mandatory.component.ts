import { Component, OnInit, Input, forwardRef }    from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

/* tslint:disable:no-use-before-declare */
export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectChannelMandatoryComponent),
    multi: true
};
/* tslint:enable:no-use-before-declare */

@Component({
  selector: 'app-select-channel-mandatory',
  template: `
  <div *ngIf="!lastConfigRow" class="flex-justify-right">
    <select id="{{id}}_{{name}}" name="{{name}}" value="actualStaticValue" required
      class="form-control form-control-sm" readonly>
      <option value="actualStaticValue">{{actualStaticValue}}</option>
    </select>
  </div>
  <div *ngIf="lastConfigRow" class="flex-justify-right">
    <select id="{{id}}_{{name}}" name="{{name}}" [(ngModel)]="value" required
      class="form-control form-control-sm" (blur)="onBlur()">
      <option *ngFor="let cmo of chanMandatoryOpts" [ngValue]="cmo">{{cmo}}</option>
    </select>
  </div>
  `,
  styles: [
    '.flex-justify-center {display: flex; justify-content: center; align-items: center;}',
    '.flex-justify-right {display: flex; justify-content: flex-end; align-items: right;}'
  ],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class SelectChannelMandatoryComponent implements OnInit, ControlValueAccessor {
  // Placeholders for the callbacks which are later providesd
  // by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  @Input() id: string;
  @Input() name: string;
  @Input() actualStaticValue: string;
  @Input() lastConfigRow: number;

  chanMandatoryOpts: string[] = ['No', 'Email', 'IVR', 'SMS'];
  private innerValue: any = '';

  constructor() { }

  ngOnInit() {
    console.log('SelectChannelMandatoryComponent:', this.id, this.name);
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
