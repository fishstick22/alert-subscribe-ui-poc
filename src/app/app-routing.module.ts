import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }          from './components/home/home.component';
import { DashboardComponent }     from './components/dashboard/dashboard.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { PageNotFoundComponent }  from './components/page-not-found/page-not-found.component';
import { ProgramComponent }       from './components/program/program.component';

const routes: Routes = [
  { path: 'home',           component: HomeComponent },
  { path: 'dashboard',      component: DashboardComponent },
  { path: 'communications', component: CommunicationComponent },
  { path: 'program',        component: ProgramComponent },
  { path: '',               redirectTo: '/home', pathMatch: 'full' },
  { path: '**',             component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }