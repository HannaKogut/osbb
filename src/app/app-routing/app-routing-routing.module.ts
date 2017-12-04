import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BorowersComponent } from '../borowers/borowers.component';
import { MainComponent } from '../main/main.component'; 

import { NewsComponent } from '../news/news.component';
import { FinancesComponent } from '../finances/finances.component';
import { DocumentationComponent } from '../documentation/documentation.component';
import { CalculationComponent } from '../calculation/calculation.component';
import { ContractsComponent } from '../contracts/contracts.component';
import { ControlsProtocolsComponent } from '../controls-protocols/controls-protocols.component';
import { MeetingProtocolsComponent } from '../meeting-protocols/meeting-protocols.component';
import { RegulationsComponent } from '../regulations/regulations.component';
import { RevisionComponent } from '../revision/revision.component';
import { SpendingComponent } from '../spending/spending.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { FaqComponent } from '../faq/faq.component';

const routes: Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', component: MainComponent},
	{path: 'borowers', component:BorowersComponent},
	{path: 'news', component:NewsComponent},
	{path: 'finances', component:FinancesComponent},
	{path: 'documentation', component:DocumentationComponent},
	{path: 'contracts', component: ContractsComponent },
 	 {path: 'calculation', component: CalculationComponent},
 	 {path: 'revision', component: RevisionComponent },
  	{path: 'spending', component: SpendingComponent},
  	{path: 'regulations', component: RegulationsComponent},
  	{path: 'control', component: ControlsProtocolsComponent},
  	{path: 'meeting-protocols', component: MeetingProtocolsComponent},
  	{path: 'contacts', component: ContactsComponent},
  	{path: 'faq', component: FaqComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
