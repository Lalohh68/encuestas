import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EncuestaRoutingModule } from './encuesta-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import { ExtraescolaresComponent } from './extraescolares/extraescolares.component';
import { ControlEscolarComponent } from './control-escolar/control-escolar.component';
import {MatStepperModule} from '@angular/material/stepper';
import { TutoriasComponent } from './tutorias/tutorias.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { CentroDeComputoComponent } from './centro-de-computo/centro-de-computo.component';
import { ServicioSocialComponent } from './servicio-social/servicio-social.component';
import { ResidenciasComponent } from './residencias/residencias.component';
import { IdiomasComponent } from './idiomas/idiomas.component';
import { Cafeteria1Component } from './cafeteria1/cafeteria1.component';
import { Cafeteria2Component } from './cafeteria2/cafeteria2.component';
import { CajasComponent } from './cajas/cajas.component';
import { CoordinadorDeCarrerasComponent } from './coordinador-de-carreras/coordinador-de-carreras.component';
import { BecasComponent } from './becas/becas.component';
import { CentroDeCopiadoComponent } from './centro-de-copiado/centro-de-copiado.component';
import { PsicologicoComponent } from './psicologico/psicologico.component';
import { MedicoComponent } from './medico/medico.component';
import { AsesoriasAcademicasComponent } from './asesorias-academicas/asesorias-academicas.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {GraficasComponent} from '../encuestas/graficas/graficas.component';
import {NgApexchartsModule} from 'ng-apexcharts'
import * as ApexCharts from 'apexcharts';
import { NgChartsModule } from 'ng2-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatTableModule} from '@angular/material/table';
import {TablaComponent} from '../encuestas/tabla/tabla.component';
import { StudentsComponent } from '../layouts/students/students.component';
import {SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NoDisponibleComponent } from './no-disponible/no-disponible.component';
@NgModule({
  
  imports: [
    RouterModule.forChild(EncuestaRoutingModule),
    CommonModule,
    MatCardModule, 
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatToolbarModule,
    MatInputModule,
    MatSnackBarModule,
    MatIconModule,FormsModule, ReactiveFormsModule,
    MatStepperModule,
    MatProgressBarModule,
    NgApexchartsModule,
    NgChartsModule,
    FontAwesomeModule,
    MatTableModule,
   SweetAlert2Module
  ],declarations: [
    InicioComponent,
    ExtraescolaresComponent,
    ControlEscolarComponent,
    TutoriasComponent,
    BibliotecaComponent,
    CentroDeComputoComponent,
    ServicioSocialComponent,
    ResidenciasComponent,
    IdiomasComponent,
    Cafeteria1Component,
    Cafeteria2Component,
    CajasComponent,
    CoordinadorDeCarrerasComponent,
    BecasComponent,
    CentroDeCopiadoComponent,
    PsicologicoComponent,
    MedicoComponent,
    AsesoriasAcademicasComponent,
    TablaComponent,
    NoDisponibleComponent
  ],
  bootstrap: [EncuestaModule]
})
export class EncuestaModule { }