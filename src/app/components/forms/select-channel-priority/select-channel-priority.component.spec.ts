import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectChannelPriorityComponent } from './select-channel-priority.component';

describe('SelectChannelPriorityComponent', () => {
  let component: SelectChannelPriorityComponent;
  let fixture: ComponentFixture<SelectChannelPriorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectChannelPriorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectChannelPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
