import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import { SedesComponent } from './pages/sedes/sedes.component';
import { AlmacenesComponent } from './pages/almacenes/almacenes.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: DashboardComponent
  // },
  // {
  //   path: 'sedes',
  //   component: SedesComponent
  // },

  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'sedes',
        component: SedesComponent,
      },
      {
        path: 'alamacenes',
        component: AlmacenesComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }