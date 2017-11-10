import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommActionsPopoverComponent } from './actions-popover.component';

describe('CommActionsPopoverComponent', () => {
  let component: CommActionsPopoverComponent;
  let fixture: ComponentFixture<CommActionsPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommActionsPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommActionsPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
