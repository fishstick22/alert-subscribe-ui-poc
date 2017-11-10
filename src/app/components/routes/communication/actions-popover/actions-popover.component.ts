import { Component, OnInit, Input,
         Output, EventEmitter }       from '@angular/core';

 import { Communication,
          CommunicationSortCriteria,
          CommunicationConfigAction } from 'app/classes/model/communication';

// https://ng-bootstrap.github.io/#/components/popover/examples

@Component({
  selector: 'app-comm-actions-popover',
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
                 (click)="configure(commId, 'program'); p.close();"
                  title="Configure Program for CommId {{commId}}: {{commName}} ">
              Program</span></div>
        <div class="float-right inner-popover">
            <span class="badge badge-success clickable"
                 (click)="configure(commId, 'clients'); p.close();"
                  title="Configure Client(s) for CommId {{commId}}: {{commName}} ">
              Clients</span>
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
export class CommActionsPopoverComponent implements OnInit {

  private attachOutsideOnClick = false;
  private delayClickOutsideInit = true;
  private clickOutsideEvents = 'click';
  private exclude = 'ngbPopover ngb-popover';
  private excludeBeforeClick = false;

  @Input() commId: string;
  @Input() commName: string;
  @Output() configAction = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  configure(id, config) {
    console.log('ActionsPopoverComponent configure: ', id, config);
    const commConfigAction:  CommunicationConfigAction = new CommunicationConfigAction(id, config);
    this.configAction.emit(commConfigAction);
  }

  private onClick(e: Event) {
    console.log('Clicked inside:', e);
  }

  private onClickedOutside(e: Event, p: any) {
    console.log('Clicked outside:', e);
    p.close();
  }
}
