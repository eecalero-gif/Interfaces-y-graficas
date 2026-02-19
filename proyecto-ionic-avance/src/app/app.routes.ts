import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { RegistroPage } from './registro/registro.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'registro', component: RegistroPage }
];