import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureProgramViaCommunicationComponent } from './configure-program-via-communication.component';

describe('ConfigureProgramViaCommunicationComponent', () => {
  let component: ConfigureProgramViaCommunicationComponent;
  let fixture: ComponentFixture<ConfigureProgramViaCommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureProgramViaCommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureProgramViaCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
