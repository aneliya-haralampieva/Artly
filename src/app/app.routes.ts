import { Routes } from '@angular/router';
import { CatalogComponent } from './features/catalog/catalog';
import { LoginComponent } from './features/auth/login/login';
import { RegisterComponent } from './features/auth/register/register';

export const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/catalog', pathMatch: 'full' } // Defaults to Catalog
];