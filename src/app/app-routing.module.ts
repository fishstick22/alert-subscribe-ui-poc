import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { HomeComponent }          from 'app/components/routes/home/home.component';
import { DashboardComponent }     from 'app/components/routes/dashboard/dashboard.component';
import { CommunicationComponent } from 'app/components/routes/communication/communication.component';
import { PageNotFoundComponent }  from 'app/components/page-not-found/page-not-found.component';
import { ProgramComponent }       from 'app/components/routes/program/program.component';

const routes: Routes = [
  { path: '',               redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',           component: HomeComponent },
  { path: 'dashboard',      component: DashboardComponent },
  { path: 'communication',  component: CommunicationComponent },
  { path: 'program',        component: ProgramComponent },
  { path: '**',             component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
