import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }    from '@angular/forms';
import { NgbModule }              from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct }            from '@ng-bootstrap/ng-bootstrap';

import { DatepickerPopupComponent }    from 'app/components/forms/datepicker-popup/datepicker-popup.component';
import { ClickOutsideComponent }       from 'app/components/test/click-outside/click-outside.component';
import { ClickOutsideDirective }       from 'app/directives/click-outside.directive';

import { DateEffExpComponent } from './date-eff-exp.component';

describe('DateEffExpComponent', () => {
  let component: DateEffExpComponent;
  let fixture: ComponentFixture<DateEffExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DateEffExpComponent,
        DatepickerPopupComponent,
        ClickOutsideComponent,
        ClickOutsideDirective ],
        imports: [ FormsModule, NgbModule.forRoot() ]
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
