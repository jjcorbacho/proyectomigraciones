import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppMaterialModule} from "../app-material.module";
import {RouterModule} from "@angular/router";
import { AlertComponent } from './components/alert/alert.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { HeaderComponent } from './components/header/header.component';
import { SeleccionJefaturasComponent } from './components/seleccion-jefaturas/seleccion-jefaturas.component';
import { SeleccionDependenciasComponent } from './components/seleccion-dependencias/seleccion-dependencias.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AlertComponent,
    ConfirmationComponent,
    HeaderComponent,
    SeleccionJefaturasComponent,
    SeleccionDependenciasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule,
  ],
  exports: [
    HeaderComponent,
    AlertComponent,
    ConfirmationComponent,
    SeleccionJefaturasComponent,
    SeleccionDependenciasComponent

  ],

  providers: [
    DataService
  ]
})
export class SharedModule { }
