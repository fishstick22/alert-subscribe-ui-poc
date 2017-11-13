import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }    from '@angular/forms';
import { NgbModule }              from '@ng-bootstrap/ng-bootstrap';

import { SortableColumnComponent }     from 'app/components/utility/sortable-column/sortable-column.component';
import { CommActionsPopoverComponent } from 'app/components/routes/communication/actions-popover/actions-popover.component';

import { DraggableDirective }          from 'app/directives/drag-drop/draggable.directive';
import { DroppableDirective }          from 'app/directives/drag-drop/droppable.directive';
import { ClickOutsideDirective }       from 'app/directives/click-outside.directive';
import { SortableTableDirective }      from 'app/directives/sortable-table.directive';

import { CommActionTableComponent } from './action-table.component';

describe('CommActionTableComponent', () => {
  let component: CommActionTableComponent;
  let fixture: ComponentFixture<CommActionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CommActionTableComponent,
        SortableColumnComponent,
        CommActionsPopoverComponent,
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
    fixture = TestBed.createComponent(CommActionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
