import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingRoutingModule } from './app-routing/app-routing-routing.module';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BorowersComponent } from './borowers/borowers.component';
import { GaleryComponent } from './galery/galery.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BorowersComponent,
    GaleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingRoutingModule,
    BrowserAnimationsModule,
    
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
