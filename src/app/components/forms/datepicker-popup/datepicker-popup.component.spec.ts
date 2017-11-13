import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }    from '@angular/forms';
import { NgbModule }              from '@ng-bootstrap/ng-bootstrap';

import { ClickOutsideComponent }       from 'app/components/test/click-outside/click-outside.component';
import { ClickOutsideDirective }       from 'app/directives/click-outside.directive';
import { DatepickerPopupComponent } from './datepicker-popup.component';

describe('DatepickerPopupComponent', () => {
  let component: DatepickerPopupComponent;
  let fixture: ComponentFixture<DatepickerPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DatepickerPopupComponent,
        ClickOutsideComponent,
        ClickOutsideDirective],
        imports: [ FormsModule, NgbModule.forRoot() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
