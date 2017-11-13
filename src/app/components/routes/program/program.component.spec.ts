import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }    from '@angular/forms';
import { NgbModule }              from '@ng-bootstrap/ng-bootstrap';

import { ProgActionsPopoverComponent } from 'app/components/routes/program/actions-popover/actions-popover.component';

import { ClickOutsideDirective }       from 'app/directives/click-outside.directive';

import { ProgramComponent } from './program.component';

describe('ProgramComponent', () => {
  let component: ProgramComponent;
  let fixture: ComponentFixture<ProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProgramComponent,
        ProgActionsPopoverComponent,
        ClickOutsideDirective
      ],
      imports: [ FormsModule, NgbModule.forRoot() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
