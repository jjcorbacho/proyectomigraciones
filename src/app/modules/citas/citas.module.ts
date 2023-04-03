import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AppMaterialModule} from "../../app-material.module";
import {SharedModule} from "../../shared/shared.module";
import { RegistroProgramacionCitasComponent } from './registro-programacion-citas/registro-programacion-citas.component';
import { PublicacionDeCitasComponent } from './publicacion-de-citas/publicacion-de-citas.component';

@NgModule({
  declarations: [
    BusquedaComponent,
    RegistroProgramacionCitasComponent,
    PublicacionDeCitasComponent
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
