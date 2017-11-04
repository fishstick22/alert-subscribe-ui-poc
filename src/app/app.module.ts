import { NgModule }               from '@angular/core';
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

// Modal stuff
import { AddProgramComponent }         from 'app/components/modal/addprogram/addprogram.component';
import { EditProgramComponent }        from 'app/components/modal/editprogram/editprogram.component';
import { DeleteProgramComponent }      from 'app/components/modal/deleteprogram/deleteprogram.component';
import { ProgramConfigByCommComponent }from 'app/components/modal/program-config-by-comm/program-config-by-comm.component';

// Forms
import { DateEffExpComponent }         from 'app/components/forms/date-eff-exp/date-eff-exp.component';
import { DatepickerPopupComponent }    from 'app/components/forms/datepicker-popup/datepicker-popup.component';
import { SelectChannelMandatoryComponent
                                     } from 'app/components/forms/select-channel-mandatory/select-channel-mandatory.component';
import { SelectChannelPriorityComponent
                                     } from 'app/components/forms/select-channel-priority/select-channel-priority.component';
// Utilities
// http://www.carbonatethis.com/sort-table-columns-with-angular-and-typescript/
import { SortableColumnComponent }     from 'app/components/utility/sortable-column/sortable-column.component';

// Services
import { ClientService }               from 'app/services/client.service';
import { CommunicationService }        from 'app/services/communication.service';
import { ProgramService }              from 'app/services/program.service';
import { ProgramConfigurationService } from 'app/services/program-configuration.service';
import { SortableColumnService }       from 'app/services/sortable-column.service';

// Imports for loading & configuring the in-memory web api
// TODO want some way to turn it on and off without commenting out code
// https://stackoverflow.com/questions/40214211/disable-angular2-in-memory-web-api-for-production
import { InMemoryWebApiModule }        from 'angular-in-memory-web-api';
import { InMemoryDataService }         from 'app/services/in-memory-data.service';
import { environment }                 from 'environments/environment';

// Directives
import { NgClickOutsideDirective }     from 'app/directives/ng-click-outside.directive';
import { SortableTableDirective }      from 'app/directives/sortable-table.directive';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,

    HomeComponent,
    DashboardComponent,
    CommunicationComponent,
    ProgramComponent,
    ClientComponent,

    AddProgramComponent,
    EditProgramComponent,
    DeleteProgramComponent,
    ProgramConfigByCommComponent,

    SortableColumnComponent,

    DateEffExpComponent,
    DatepickerPopupComponent,
    SelectChannelMandatoryComponent,
    SelectChannelPriorityComponent,

    NgClickOutsideDirective,
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
  entryComponents: [
    AddProgramComponent,
    EditProgramComponent,
    DeleteProgramComponent,
    ProgramConfigByCommComponent
  ],
  providers: [
    ClientService,
    CommunicationService,
    ProgramService,
    ProgramConfigurationService,
    SortableColumnService,
    { provide: APP_CONFIG, useValue: AppConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
