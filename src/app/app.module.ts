import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { NgbModule }      from '@ng-bootstrap/ng-bootstrap';

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
import { CommunicationService }   from './services/communication.service';
import { ProgramService }         from './services/program.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

// Modal stuff
import { ModalComponent }              from './components/modal/modal.component';
import { ComponentAsContentComponent } from './components/modal/component-as-content/component-as-content.component';
import { NgbdModalContent }            from './components/modal/component-as-content/component-as-content.component';
import { AddProgramComponent }         from './components/modal/addprogram/addprogram.component';


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
    AddProgramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
    ,InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  entryComponents: [NgbdModalContent, AddProgramComponent],
  providers: [CommunicationService, ProgramService],
  bootstrap: [AppComponent]
})
export class AppModule { }
