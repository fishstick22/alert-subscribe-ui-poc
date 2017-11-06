import { Component, OnInit, Input,
         Output, EventEmitter }       from '@angular/core';

import { CommunicationConfigAction } from 'app/components/routes/communication/communication.component';

// https://ng-bootstrap.github.io/#/components/popover/examples

@Component({
  selector: 'app-comm-actions-popover',
  template: `
    <ng-template #popContent>
      <div class="w-100">
        <div class="float-left" title=""
            (click)="configure(commId, 'program'); p.close();">Program</div>
        <div class="float-right" title=""
            (click)="configure(commId, 'clients'); p.close();">Clients</div>
      </div>
    </ng-template>
    <div [ngbPopover]="popContent"
         #p="ngbPopover"
         popoverTitle="Configure {{commName}}"
         placement="left">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    'input { width: 80px; }',
    'input:focus { width: 82px; }'
  ]
})
export class CommActionsPopoverComponent implements OnInit {

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

}
