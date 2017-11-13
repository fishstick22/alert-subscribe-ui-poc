import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }    from '@angular/forms';
import { NgbModule }              from '@ng-bootstrap/ng-bootstrap';

import { ClientActionTableComponent }  from 'app/components/routes/client/action-table/action-table.component';
import { CommActionTableComponent }    from 'app/components/routes/communication/action-table/action-table.component';

import { SortableColumnComponent }     from 'app/components/utility/sortable-column/sortable-column.component';
import { ClientActionsPopoverComponent
} from 'app/components/routes/client/actions-popover/actions-popover.component';
import { CommActionsPopoverComponent } from 'app/components/routes/communication/actions-popover/actions-popover.component';

import { SelectChannelMandatoryComponent
}   from 'app/components/forms/select-channel-mandatory/select-channel-mandatory.component';
import { SelectChannelPriorityComponent
  } from 'app/components/forms/select-channel-priority/select-channel-priority.component';
import { DateEffExpComponent }         from 'app/components/forms/date-eff-exp/date-eff-exp.component';
import { DatepickerPopupComponent }    from 'app/components/forms/datepicker-popup/datepicker-popup.component';
import { DraggableDirective }          from 'app/directives/drag-drop/draggable.directive';
import { DroppableDirective }          from 'app/directives/drag-drop/droppable.directive';
import { ClickOutsideDirective }       from 'app/directives/click-outside.directive';
import { SortableTableDirective }      from 'app/directives/sortable-table.directive';

import { ClientConfigComponent } from './client-config.component';

describe('ClientConfigComponent', () => {
  let component: ClientConfigComponent;
  let fixture: ComponentFixture<ClientConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ClientConfigComponent,
        ClientActionTableComponent,
        CommActionTableComponent,
        CommActionsPopoverComponent,
        SortableColumnComponent,
        ClientActionsPopoverComponent,
        DateEffExpComponent,
        DatepickerPopupComponent,
        SelectChannelMandatoryComponent,
        SelectChannelPriorityComponent,
        DraggableDirective,
        DroppableDirective,
        ClickOutsideDirective,
        SortableTableDirective
      ],
      imports: [ FormsModule, NgbModule.forRoot() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
