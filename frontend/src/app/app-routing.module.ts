import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent } from "./app.component";
import { ControlEscolarComponent } from './encuesta/control-escolar/control-escolar.component';
import { EncuestaModule } from './encuesta/encuesta.module';
import { ExtraescolaresComponent } from './encuesta/extraescolares/extraescolares.component';
import { InicioComponent } from './encuesta/inicio/inicio.component';
import { StudentsComponent } from './layouts/students/students.component';

export const AppRoutes: Routes = [
 {path:'admin',
loadChildren: () => import('./admin/admin.module').then(m=>m.AdminModule)},
{path:'encuesta',
loadChildren: () => import('./encuesta/encuesta.module').then(m=>m.EncuestaModule)}
];

