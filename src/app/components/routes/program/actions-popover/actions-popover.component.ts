import { Component, OnInit, Input,
         Output, EventEmitter }       from '@angular/core';

import { Program,
          ProgramConfigAction }    from 'app/classes/model/program';

@Component({
  selector: 'app-prog-actions-popover',
  templateUrl: './actions-popover.component.html',
  styleUrls: ['./actions-popover.component.scss']
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
