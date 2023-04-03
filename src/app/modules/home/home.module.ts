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
import { CalendarioFeriadosComponent } from './pages/calendario-feriados/calendario-feriados.component';
import { CalendarioAtencionComponent } from './pages/calendario-atencion/calendario-atencion.component';
import { CapacidadOperativaComponent } from './pages/capacidad-operativa/capacidad-operativa.component';
import { DiaAcomulativoComponent } from './pages/dia-acomulativo/dia-acomulativo.component';
import { ConfiguracionCalendarioAtencionComponent } from './components/configuracion-calendario-atencion/configuracion-calendario-atencion.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SedesComponent,
    AlmacenesComponent,
    CalendarioFeriadosComponent,
    CalendarioAtencionComponent,
    CapacidadOperativaComponent,
    DiaAcomulativoComponent,
    ConfiguracionCalendarioAtencionComponent
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
