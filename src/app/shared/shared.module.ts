import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppMaterialModule} from "../app-material.module";
import {RouterModule} from "@angular/router";
import { AlertComponent } from './components/alert/alert.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AlertComponent,
    ConfirmationComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule,
  ],
  exports: [
    HeaderComponent,
    AlertComponent,
    ConfirmationComponent

  ]
})
export class SharedModule { }
