import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProgramComponent } from './deleteprogram.component';

describe('DeleteprogramComponent', () => {
  let component: DeleteProgramComponent;
  let fixture: ComponentFixture<DeleteProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
