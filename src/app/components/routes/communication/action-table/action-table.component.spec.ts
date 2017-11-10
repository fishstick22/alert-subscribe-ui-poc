import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommActionTableComponent } from './action-table.component';

describe('CommActionTableComponent', () => {
  let component: CommActionTableComponent;
  let fixture: ComponentFixture<CommActionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommActionTableComponent ]
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
