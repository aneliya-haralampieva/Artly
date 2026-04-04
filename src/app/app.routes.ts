import { Routes } from '@angular/router';
import { CatalogComponent } from './features/catalog/catalog';

export const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: '', redirectTo: '/catalog', pathMatch: 'full' } // This makes Catalog the home page for now!
];