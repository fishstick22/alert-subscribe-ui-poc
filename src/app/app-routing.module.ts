import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { PageNotFoundComponent }  from 'app/components/page-not-found/page-not-found.component';
import { HomeComponent }          from 'app/components/routes/home/home.component';
import { DashboardComponent }     from 'app/components/routes/dashboard/dashboard.component';
import { CommunicationComponent } from 'app/components/routes/communication/communication.component';
import { ClientComponent }        from 'app/components/routes/client/client.component';
import { ProgramComponent }       from 'app/components/routes/program/program.component';
import { TestComponent }          from 'app/components/test/test.component';

const routes: Routes = [
  { path: '',               redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',           component: HomeComponent },
  { path: 'dashboard',      component: DashboardComponent },
  { path: 'communication',  component: CommunicationComponent },
  { path: 'program',        component: ProgramComponent },
  { path: 'client',         component: ClientComponent },
  { path: 'test',           component: TestComponent },
  { path: '**',             component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
