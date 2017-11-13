import { Component, OnInit, Input,
         Output, EventEmitter }    from '@angular/core';

import { Client,
         ClientSortCriteria,
         ClientConfigAction }      from 'app/classes/model/client';


@Component({
  selector: 'app-client-actions-popover',
  templateUrl: './actions-popover.component.html',
  styleUrls: ['./actions-popover.component.scss']
})
export class ClientActionsPopoverComponent implements OnInit {

  private attachOutsideOnClick = false;
  private delayClickOutsideInit = true;
  private clickOutsideEvents = 'click';
  private exclude = 'ngbPopover ngb-popover';
  private excludeBeforeClick = false;

  @Input() clientId: string;
  @Input() clientName: string;
  @Output() configAction = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  configure(id, config) {
    console.log('ActionsPopoverComponent configure: ', id, config);
    const clientConfigAction:  ClientConfigAction = new ClientConfigAction(id, config);
    this.configAction.emit(clientConfigAction);
  }

  private onClick(e: Event) {
    console.log('Clicked inside:', e);
  }

  private onClickedOutside(e: Event, p: any) {
    console.log('Clicked outside:', e);
    p.close();
  }
}
