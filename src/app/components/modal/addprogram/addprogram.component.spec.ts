import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }    from '@angular/forms';

import { AddProgramComponent } from './addprogram.component';

describe('AddProgramComponent', () => {
  let component: AddProgramComponent;
  let fixture: ComponentFixture<AddProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProgramComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
