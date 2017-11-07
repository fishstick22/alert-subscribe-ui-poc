import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsPopoverComponent } from './actions-popover.component';

describe('ActionsPopoverComponent', () => {
  let component: ActionsPopoverComponent;
  let fixture: ComponentFixture<ActionsPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
