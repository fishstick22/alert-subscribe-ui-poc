import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppRoutingModule }       from './app-routing.module';
import { AppComponent }           from './app.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { DashboardComponent }     from './components/dashboard/dashboard.component';
import { FooterComponent }        from './components/footer/footer.component';
import { HomeComponent }          from './components/home/home.component';
import { NavbarComponent }        from './components/navbar/navbar.component';
import { PageNotFoundComponent }  from './components/page-not-found/page-not-found.component';
import { ProgramComponent }       from './components/program/program.component';

import { CommunicationService }   from './services/communication.service';
import { ProgramService }         from './services/program.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    CommunicationComponent,
    DashboardComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    PageNotFoundComponent,
    ProgramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
    ,InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [CommunicationService, ProgramService],
  bootstrap: [AppComponent]
})
export class AppModule { }
