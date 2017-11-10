import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientActionTableComponent } from './action-table.component';

describe('ClientActionTableComponent', () => {
  let component: ClientActionTableComponent;
  let fixture: ComponentFixture<ClientActionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientActionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientActionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
