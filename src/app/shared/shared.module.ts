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
import { SeleccionSedesComponent } from './components/seleccion-sedes/seleccion-sedes.component';
import { BotonAgregarComponent } from './components/boton-agregar/boton-agregar.component';
import { SelectorComponent } from './components/selector/selector.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AlertComponent,
    ConfirmationComponent,
    HeaderComponent,
    SeleccionJefaturasComponent,
    SeleccionDependenciasComponent,
    SeleccionSedesComponent,
    BotonAgregarComponent,
    SelectorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule,
    ReactiveFormsModule,
    
  ],
  exports: [
    HeaderComponent,
    AlertComponent,
    ConfirmationComponent,
    SeleccionJefaturasComponent,
    SeleccionDependenciasComponent,
    SeleccionSedesComponent,
    BotonAgregarComponent,
    SelectorComponent

  ],

  providers: [
    DataService
  ]
})
export class SharedModule { }
