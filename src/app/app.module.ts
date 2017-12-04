import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingRoutingModule } from './app-routing/app-routing-routing.module';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BorowersComponent } from './borowers/borowers.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NewsComponent } from './news/news.component';
import { FinancesComponent } from './finances/finances.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { ContractsComponent } from './contracts/contracts.component';
import { SpendingComponent } from './spending/spending.component';
import { CalculationComponent } from './calculation/calculation.component';
import { RegulationsComponent } from './regulations/regulations.component';
import { ControlsProtocolsComponent } from './controls-protocols/controls-protocols.component';
import { MeetingProtocolsComponent } from './meeting-protocols/meeting-protocols.component';
import { RevisionComponent } from './revision/revision.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FaqComponent } from './faq/faq.component';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BorowersComponent,
    
    NewsComponent,
    FinancesComponent,
    DocumentationComponent,
    ContractsComponent,
    SpendingComponent,
    CalculationComponent,
    RegulationsComponent,
    ControlsProtocolsComponent,
    MeetingProtocolsComponent,
    RevisionComponent,
    ContactsComponent,
    FaqComponent
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
