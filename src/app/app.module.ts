import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { FormsModule,
         ReactiveFormsModule }    from '@angular/forms';
import { HttpModule }             from '@angular/http';
import { NgbModule }              from '@ng-bootstrap/ng-bootstrap';

// AppConfig
// https://stackoverflow.com/questions/34986922/define-global-constants-in-angular-2/40287063#40287063
import { APP_CONFIG, AppConfig }  from './app.config';
import { IAppConfig }             from './iapp-config';
import { AppComponent }           from './app.component';
// Basic Page Layout Stuff
import { NavbarComponent }        from './components/navbar/navbar.component';
import { FooterComponent }        from './components/footer/footer.component';

import { AppRoutingModule }       from './app-routing.module';
// Application Routing Components
import { HomeComponent }          from './components/home/home.component';
import { DashboardComponent }     from './components/dashboard/dashboard.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { ProgramComponent }       from './components/program/program.component';

import { PageNotFoundComponent }  from './components/page-not-found/page-not-found.component';

// Services
import { CommunicationService }        from './services/communication.service';
import { ProgramService }              from './services/program.service';
import { ProgramConfigurationService } from './services/program-configuration.service';

// Imports for loading & configuring the in-memory web api
// want some way to turn it on and off without commenting out code
// https://stackoverflow.com/questions/40214211/disable-angular2-in-memory-web-api-for-production
import { InMemoryWebApiModule }        from 'angular-in-memory-web-api';
import { InMemoryDataService }         from './services/in-memory-data.service';

// Modal stuff
import { ModalComponent }              from './components/modal/modal.component';
import { ComponentAsContentComponent } from './components/modal/component-as-content/component-as-content.component';
import { NgbdModalContent }            from './components/modal/component-as-content/component-as-content.component';
import { AddProgramComponent }         from './components/modal/addprogram/addprogram.component';
import { EditProgramComponent }        from './components/modal/editprogram/editprogram.component';
import { DeleteProgramComponent }      from './components/modal/deleteprogram/deleteprogram.component';
import { ConfigureProgramViaCommunicationComponent
                            } from './components/modal/configure-program-via-communication/configure-program-via-communication.component';


// Utilities
// http://www.carbonatethis.com/sort-table-columns-with-angular-and-typescript/
import { SortableColumnComponent }     from './components/utility/sortable-column/sortable-column.component';
import { SortableColumnService }       from './services/sortable-column.service';
import { SortableTableDirective }      from './components/utility/sortable-table.directive';

// Forms
import { SelectChannelPriorityComponent } from './components/forms/select-channel-priority/select-channel-priority.component';
import { DateEffExpComponent } from './components/forms/date-eff-exp/date-eff-exp.component';
import { DatepickerPopupComponent } from './components/forms/datepicker-popup/datepicker-popup.component';
import { ClosePopoverOnClickOutsideDirective } from './components/forms/datepicker-popup/close-popover-on-click-outside.directive';
import { SelectChannelMandatoryComponent } from './components/forms/select-channel-mandatory/select-channel-mandatory.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,

    HomeComponent,
    DashboardComponent,
    CommunicationComponent,
    ProgramComponent,

    PageNotFoundComponent,

    ModalComponent,
    ComponentAsContentComponent,
    NgbdModalContent,
    AddProgramComponent,
    EditProgramComponent,
    DeleteProgramComponent,
    ConfigureProgramViaCommunicationComponent,

    SortableColumnComponent,
    SortableTableDirective,

    SelectChannelPriorityComponent,
    DateEffExpComponent,
    DatepickerPopupComponent,
    ClosePopoverOnClickOutsideDirective,
    SelectChannelMandatoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  entryComponents: [
    NgbdModalContent,
    AddProgramComponent,
    EditProgramComponent,
    DeleteProgramComponent,
    ConfigureProgramViaCommunicationComponent
  ],
  providers: [
    CommunicationService,
    ProgramService,
    ProgramConfigurationService,
    SortableColumnService,
    { provide: APP_CONFIG, useValue: AppConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
