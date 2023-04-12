import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../core/home/home.component';
import {SharedModule} from "../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {AppMaterialModule} from "../app-material.module";
import { SedesComponent } from '../core/sedes/sedes.component';
import { AlmacenesComponent,} from '../core/almacenes/almacenes.component';
import { CalendarioFeriadosComponent } from '../core/calendario-feriados/calendario-feriados.component';
import { CalendarioAtencionComponent } from '../core/calendario-atencion/calendario-atencion.component';
import { CapacidadOperativaComponent } from '../core/capacidad-operativa/capacidad-operativa.component';
import { DiaAcomulativoComponent } from '../core/dia-acomulativo/dia-acomulativo.component';
import { AlmacenCentralComponent, DialogoAnadir, DialogoEliminar, Dialogodistribuir } from '../core/almacen-central/almacen-central.component';
import { AlmacenSecundarioComponent } from '../core/almacen-secundario/almacen-secundario.component';
import { RegistroProgramacionCitasComponent } from '../core/registro-programacion-citas/registro-programacion-citas.component';
import { PublicacionDeCitasComponent } from '../core/publicacion-de-citas/publicacion-de-citas.component';

@NgModule({
  declarations: [
    HomeComponent,
    SedesComponent,
    AlmacenesComponent,
    CalendarioFeriadosComponent,
    CalendarioAtencionComponent,
    CapacidadOperativaComponent,
    DiaAcomulativoComponent,
    AlmacenCentralComponent, DialogoEliminar, DialogoAnadir, Dialogodistribuir,
    AlmacenSecundarioComponent,
    RegistroProgramacionCitasComponent,
    PublicacionDeCitasComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    AppMaterialModule,
    SharedModule,
  ],

})
export class HomeModule { }
