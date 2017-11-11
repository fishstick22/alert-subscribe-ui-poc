import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramConfigComponent } from './program-config.component';

describe('ProgramConfigComponent', () => {
  let component: ProgramConfigComponent;
  let fixture: ComponentFixture<ProgramConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
