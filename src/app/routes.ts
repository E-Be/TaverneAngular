import { AccueilComponent } from './component/accueil/accueil.component';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:"full"},
  { path: 'home', component: AccueilComponent},
  { path: 'connexion', component: ConnexionComponent },
];
