import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {AppMaterialModule} from "../../app-material.module";
import { SedesComponent } from './pages/sedes/sedes.component';
import { AlmacenesComponent } from './pages/almacenes/almacenes.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SedesComponent,
    AlmacenesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    AppMaterialModule,
    SharedModule,
  ],

  exports: [
    SedesComponent,
  ]
})
export class HomeModule { }
