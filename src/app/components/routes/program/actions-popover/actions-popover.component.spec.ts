import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgActionsPopoverComponent } from './actions-popover.component';

describe('ProgActionsPopoverComponent', () => {
  let component: ProgActionsPopoverComponent;
  let fixture: ComponentFixture<ProgActionsPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgActionsPopoverComponent ]
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
