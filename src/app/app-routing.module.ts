import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { HomeComponent }          from './components/home/home.component';
import { DashboardComponent }     from './components/dashboard/dashboard.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { ModalComponent }         from './components/modal/modal.component';
import { PageNotFoundComponent }  from './components/page-not-found/page-not-found.component';
import { ProgramComponent }       from './components/program/program.component';
import { ComponentAsContentComponent } from './components/modal/component-as-content/component-as-content.component';

const routes: Routes = [
  { path: 'home',           component: HomeComponent },
  { path: 'dashboard',      component: DashboardComponent },
  { path: 'communication',  component: CommunicationComponent },
  { path: 'program',        component: ProgramComponent },
  { path: 'modaltest',      component: ModalComponent },
  { path: 'modalcontenttest',      component: ComponentAsContentComponent },
  { path: '',               redirectTo: '/home', pathMatch: 'full' },
  { path: '**',             component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
