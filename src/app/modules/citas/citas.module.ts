import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AppMaterialModule} from "../../app-material.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    BusquedaComponent
  ],
  imports: [
    CommonModule,
    CitasRoutingModule,
    ReactiveFormsModule,
    AppMaterialModule,
    SharedModule,
  ]
})
export class CitasModule { }
