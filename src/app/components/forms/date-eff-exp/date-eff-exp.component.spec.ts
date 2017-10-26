import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateEffExpComponent } from './date-eff-exp.component';

describe('DateEffExpComponent', () => {
  let component: DateEffExpComponent;
  let fixture: ComponentFixture<DateEffExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateEffExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateEffExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
