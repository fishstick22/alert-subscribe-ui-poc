import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAsContentComponent } from './component-as-content.component';

describe('ComponentAsContentComponent', () => {
  let component: ComponentAsContentComponent;
  let fixture: ComponentFixture<ComponentAsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentAsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentAsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
