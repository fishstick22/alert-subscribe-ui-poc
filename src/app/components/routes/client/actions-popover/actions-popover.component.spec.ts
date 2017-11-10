import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientActionsPopoverComponent } from './actions-popover.component';

describe('ClientActionsPopoverComponent', () => {
  let component: ClientActionsPopoverComponent;
  let fixture: ComponentFixture<ClientActionsPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientActionsPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientActionsPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
