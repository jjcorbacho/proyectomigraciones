import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from "../core/home/home.component";
import { SedesComponent } from '../core/sedes/sedes.component';
import { AlmacenesComponent } from '../core/almacenes/almacenes.component';
import { CalendarioFeriadosComponent } from '../core/calendario-feriados/calendario-feriados.component';
import { CalendarioAtencionComponent } from '../core/calendario-atencion/calendario-atencion.component';
import { CapacidadOperativaComponent } from '../core/capacidad-operativa/capacidad-operativa.component';
import { DiaAcomulativoComponent } from '../core/dia-acomulativo/dia-acomulativo.component';
import { PublicacionDeCitasComponent } from '../core/publicacion-de-citas/publicacion-de-citas.component';
import { RegistroProgramacionCitasComponent } from '../core/registro-programacion-citas/registro-programacion-citas.component';
import { LoginComponent } from '../shared/components/login/login.component';
import { InicioComponent } from '../core/inicio/inicio.component';

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
    component: LoginComponent,
  },
  {
    path: 'inicio',
    component: InicioComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      
      {
        path: 'sedes',
        component: SedesComponent,
      },
      {
        path: 'almacenes',
        component: AlmacenesComponent,
      },
      {
        path: 'calendarioFeriados',
        component: CalendarioFeriadosComponent,
      },
      {
        path: 'calendarioAtencion',
        component: CalendarioAtencionComponent,
      },
      {
        path: 'capacidadOperativa',
        component: CapacidadOperativaComponent,
      },
      {
        path: 'diaAcomulativo',
        component: DiaAcomulativoComponent,
      },
      {
        path: 'registroProgramacionCitas',
        component: RegistroProgramacionCitasComponent,
      },
      {
        path: 'publiacionDeCitas',
        component: PublicacionDeCitasComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
