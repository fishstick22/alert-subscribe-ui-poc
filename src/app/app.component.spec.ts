import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF }  from '@angular/common';
// seems odd to have to import everything, but whatever
import { BrowserModule }          from '@angular/platform-browser';
import { FormsModule,
         ReactiveFormsModule }    from '@angular/forms';
import { HttpModule }             from '@angular/http';

import { NgbModule }              from '@ng-bootstrap/ng-bootstrap';

// AppConfig
// https://stackoverflow.com/questions/34986922/define-global-constants-in-angular-2/40287063#40287063
import { APP_CONFIG, AppConfig }  from 'app/app.config';

import { AppComponent }           from 'app/app.component';
import { AppRoutingModule }       from 'app/app-routing.module';

// Basic Page Layout Stuff
import { NavbarComponent }        from 'app/components/navbar/navbar.component';
import { FooterComponent }        from 'app/components/footer/footer.component';
import { PageNotFoundComponent }  from 'app/components/page-not-found/page-not-found.component';

// Application Routing Components
import { HomeComponent }          from 'app/components/routes/home/home.component';
import { DashboardComponent }     from 'app/components/routes/dashboard/dashboard.component';
import { CommunicationComponent } from 'app/components/routes/communication/communication.component';
import { ProgramComponent }       from 'app/components/routes/program/program.component';
import { ClientComponent }        from 'app/components/routes/client/client.component';
//
import { CommActionTableComponent }    from 'app/components/routes/communication/action-table/action-table.component';
import { CommActionsPopoverComponent } from 'app/components/routes/communication/actions-popover/actions-popover.component';
import { ProgActionsPopoverComponent } from 'app/components/routes/program/actions-popover/actions-popover.component';
import { ClientActionTableComponent }  from 'app/components/routes/client/action-table/action-table.component';
import { ClientActionsPopoverComponent
                                     } from './components/routes/client/actions-popover/actions-popover.component';

// Modal stuff
import { ClientConfigByCommComponent } from 'app/components/modal/client-config-by-comm/client-config-by-comm.component';
import { AddProgramComponent }         from 'app/components/modal/addprogram/addprogram.component';
import { EditProgramComponent }        from 'app/components/modal/editprogram/editprogram.component';
import { DeleteProgramComponent }      from 'app/components/modal/deleteprogram/deleteprogram.component';
import { ProgramConfigComponent }      from 'app/components/modal/program-config/program-config.component';
import { ProgramConfigByCommComponent }from 'app/components/modal/program-config-by-comm/program-config-by-comm.component';
import { ClientConfigComponent }       from 'app/components/modal/client-config/client-config.component';

// Forms
import { DateEffExpComponent }         from 'app/components/forms/date-eff-exp/date-eff-exp.component';
import { DatepickerPopupComponent }    from 'app/components/forms/datepicker-popup/datepicker-popup.component';
import { SelectChannelMandatoryComponent
                                   }   from 'app/components/forms/select-channel-mandatory/select-channel-mandatory.component';
import { SelectChannelPriorityComponent
                                     } from 'app/components/forms/select-channel-priority/select-channel-priority.component';
// Utilities
// http://www.carbonatethis.com/sort-table-columns-with-angular-and-typescript/
import { SortableColumnComponent }     from 'app/components/utility/sortable-column/sortable-column.component';

// Testing
import { TestComponent }               from 'app/components/test/test.component';
import { BootstrapGradientsComponent } from 'app/components/test/bootstrap-gradients/bootstrap-gradients.component';
import { ClickOutsideComponent }       from 'app/components/test/click-outside/click-outside.component';
import { DragDropComponent }           from 'app/components/test/drag-drop/drag-drop.component';

// Services
import { DataApiService }              from 'app/services/data-api/data-api.service';
import { ClientService }               from 'app/services/data-api/client/client.service';
import { ClientConfigurationService }  from 'app/services/data-api/client-configuration/client-configuration.service';
import { CommunicationService }        from 'app/services/data-api/communication/communication.service';
import { ProgramService }              from 'app/services/data-api/program/program.service';
import { ProgramConfigurationService } from 'app/services/data-api/program-configuration/program-configuration.service';
import { DragDropService }             from 'app/services/drag-drop.service';
import { SortableColumnService }       from 'app/services/sortable-column.service';

// Imports for loading & configuring the in-memory web api
// TODO want some way to turn it on and off without commenting out code
// https://stackoverflow.com/questions/40214211/disable-angular2-in-memory-web-api-for-production
import { InMemoryWebApiModule }        from 'angular-in-memory-web-api';
import { InMemoryDataService }         from 'app/services/data-api/in-memory-data.service';
import { environment }                 from 'environments/environment';

// Directives
import { DraggableDirective }          from 'app/directives/drag-drop/draggable.directive';
import { DroppableDirective }          from 'app/directives/drag-drop/droppable.directive';
import { ClickOutsideDirective }       from 'app/directives/click-outside.directive';
import { SortableTableDirective }      from 'app/directives/sortable-table.directive';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        PageNotFoundComponent,
    // routes
        HomeComponent,
        DashboardComponent,
        CommunicationComponent,
        ProgramComponent,
        ClientComponent,
    //
        CommActionTableComponent,
        CommActionsPopoverComponent,
        ProgActionsPopoverComponent,
        ClientActionTableComponent,
        ClientActionsPopoverComponent,
    // modal
        ClientConfigByCommComponent,
        AddProgramComponent,
        EditProgramComponent,
        DeleteProgramComponent,
        ProgramConfigComponent,
        ProgramConfigByCommComponent,
        ClientConfigComponent,
    // forms
        DateEffExpComponent,
        DatepickerPopupComponent,
        SelectChannelMandatoryComponent,
        SelectChannelPriorityComponent,
    // utility
        SortableColumnComponent,
    // test
        TestComponent,
        BootstrapGradientsComponent,
        ClickOutsideComponent,
        DragDropComponent,
    // directives
        DraggableDirective,
        DroppableDirective,
        ClickOutsideDirective,
        SortableTableDirective
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot(),
        (environment.inMemAPI) ? InMemoryWebApiModule.forRoot(InMemoryDataService) : [],
      ],
      // entryComponents: [
      //   ClientConfigComponent,
      //   ClientConfigByCommComponent,
      //   AddProgramComponent,
      //   EditProgramComponent,
      //   DeleteProgramComponent,
      //   ProgramConfigComponent,
      //   ProgramConfigByCommComponent
      // ],
      providers: [
        DataApiService,
        ClientService,
        ClientConfigurationService,
        CommunicationService,
        ProgramService,
        ProgramConfigurationService,
        SortableColumnService,
        DragDropService,
        { provide: APP_CONFIG, useValue: AppConfig },
        { provide: APP_BASE_HREF, useValue: '/' }
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Alert Subscribe UI Prototype/POC (dev)');
  }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
