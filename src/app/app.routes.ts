import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProcedimentosComponent } from './components/procedimentos/procedimentos.component';
import { SobremimComponent } from './components/sobremim/sobremim.component';
import { CursosComponent } from './components/cursos/cursos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'procedimentos', component: ProcedimentosComponent },
  { path: 'sobremim', component: SobremimComponent },
  { path: 'cursos', component: CursosComponent },
];
