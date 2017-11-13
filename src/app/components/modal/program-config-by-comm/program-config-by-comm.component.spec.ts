import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }    from '@angular/forms';
import { NgbModule }              from '@ng-bootstrap/ng-bootstrap';

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

import { ProgramConfigByCommComponent } from './program-config-by-comm.component';

describe('ConfigureProgramViaCommunicationComponent', () => {
  let component: ProgramConfigByCommComponent;
  let fixture: ComponentFixture<ProgramConfigByCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProgramConfigByCommComponent,
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
    fixture = TestBed.createComponent(ProgramConfigByCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
