import { Routes } from '@angular/router';
import { CatalogComponent } from './features/catalog/catalog';
import { LoginComponent } from './features/auth/login/login';
import { RegisterComponent } from './features/auth/register/register';
import { AddArtworkComponent } from './features/catalog/add-artwork/add-artwork';
import { ArtDetailsComponent } from './features/catalog/art-details';

export const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: 'catalog/:id', component: ArtDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'add-artwork', component: AddArtworkComponent },
  { path: '', redirectTo: '/catalog', pathMatch: 'full' }
];