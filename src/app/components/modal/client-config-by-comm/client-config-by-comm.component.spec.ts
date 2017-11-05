import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientConfigByCommComponent } from './client-config-by-comm.component';

describe('ClientConfigByCommComponent', () => {
  let component: ClientConfigByCommComponent;
  let fixture: ComponentFixture<ClientConfigByCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientConfigByCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientConfigByCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
