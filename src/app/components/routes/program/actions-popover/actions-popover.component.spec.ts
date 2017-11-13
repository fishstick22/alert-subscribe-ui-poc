import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }    from '@angular/forms';
import { NgbModule }              from '@ng-bootstrap/ng-bootstrap';

import { ClickOutsideDirective }       from 'app/directives/click-outside.directive';

import { ProgActionsPopoverComponent } from './actions-popover.component';

describe('ProgActionsPopoverComponent', () => {
  let component: ProgActionsPopoverComponent;
  let fixture: ComponentFixture<ProgActionsPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgActionsPopoverComponent, ClickOutsideDirective ],
      imports: [ FormsModule, NgbModule.forRoot() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgActionsPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
