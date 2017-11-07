import { Component, OnInit, Input,
         Output, EventEmitter }       from '@angular/core';

import { Program,
          ProgramConfigAction }    from 'app/model/program';

@Component({
  selector: 'app-prog-actions-popover',
  template: `
    <ng-template #popContent>
      <div class="w-100 outer-popover"
        (click)="onClick($event)"
        (appClickOutside)="onClickedOutside($event, p)"
        [attachOutsideOnClick]="attachOutsideOnClick"
        [delayClickOutsideInit]="delayClickOutsideInit"
        [clickOutsideEvents]="clickOutsideEvents"
        [exclude]="exclude"
        [excludeBeforeClick]="excludeBeforeClick">

      <div class="float-left inner-popover">
          <span class="badge badge-success clickable"
               (click)="configure(progId, 'edit'); p.close();"
                title="Configure/Edit Program {{progId}}: {{progName}} ">
            Edit</span></div>
      <div class="float-right inner-popover">
          <span class="badge badge-success clickable"
               (click)="configure(progId, 'delete'); p.close();"
                title="Delete Program {{progId}}: {{progName}} ">
            Delete</span>
        </div>
      </div>
    </ng-template>
    <div [ngbPopover]="popContent"
         #p="ngbPopover"
         popoverTitle=""
         placement="left">
      <ng-content></ng-content>
  </div>
  `,
  styles: [
    '.outer-popover, .inner-popover { display: block; }',
    '.outer-popover { width: 300px; padding: 0; }',
    '.inner-popover { padding: 5px; }'
  ]
})
export class ProgActionsPopoverComponent implements OnInit {

  private attachOutsideOnClick = false;
  private delayClickOutsideInit = true;
  private clickOutsideEvents = 'click';
  private exclude = 'ngbPopover ngb-popover';
  private excludeBeforeClick = false;

  @Input() progId: string;
  @Input() progName: string;
  @Output() configAction = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  configure(id, config) {
    console.log('ActionsPopoverComponent configure: ', id, config);
    const progConfigAction:  ProgramConfigAction = new ProgramConfigAction(id, config);
    this.configAction.emit(progConfigAction);
  }

  private onClick(e: Event) {
    console.log('Clicked inside:', e);
  }

  private onClickedOutside(e: Event, p: any) {
    console.log('Clicked outside:', e);
    p.close();
  }
}
