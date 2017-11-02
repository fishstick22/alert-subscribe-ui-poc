import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramConfigByCommComponent } from './program-config-by-comm.component';

describe('ConfigureProgramViaCommunicationComponent', () => {
  let component: ProgramConfigByCommComponent;
  let fixture: ComponentFixture<ProgramConfigByCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramConfigByCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramConfigByCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
