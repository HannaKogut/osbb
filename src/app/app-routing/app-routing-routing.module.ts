import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BorowersComponent } from '../borowers/borowers.component';
import { MainComponent } from '../main/main.component'; 
import { GaleryComponent } from '../galery/galery.component';

const routes: Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', component: MainComponent},
	{path: 'borowers', component:BorowersComponent},
	{path: 'gallery', component:GaleryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
