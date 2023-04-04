import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { FullCalendarModule } from '@fullcalendar/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxSpinnerModule} from "ngx-spinner";
import {SharedModule} from "./shared/shared.module";
import {APP_BASE_HREF} from "@angular/common";
import {MAT_DATE_LOCALE} from "@angular/material/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //FullCalendarModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    SharedModule,
    
  ],
  exports: [NgxSpinnerModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/gestor-citas' },
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
