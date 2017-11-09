import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapGradientsComponent } from './bootstrap-gradients.component';

describe('BootstrapGradientsComponent', () => {
  let component: BootstrapGradientsComponent;
  let fixture: ComponentFixture<BootstrapGradientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapGradientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapGradientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
