import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ClubesGeneralComponent } from './clubes-general/clubes-general.component';
import { RouterModule } from '@angular/router';
import { GraficasComponent } from "../encuestas/graficas/graficas.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { NgChartsModule } from 'ng2-charts';
import {MatCardModule} from '@angular/material/card';
import { DataTablesModule } from "angular-datatables";
import { ClubesComponent } from './servicios/clubes/clubes.component';
import { ControlEscolarComponent } from './servicios/control-escolar/control-escolar.component';
import { TutoriasComponent } from './servicios/tutorias/tutorias.component';
import { BibliotecaComponent } from './servicios/biblioteca/biblioteca.component';
import { CentroDeComputoComponent } from './servicios/centro-de-computo/centro-de-computo.component';
import { ServicioSocialComponent } from './servicios/servicio-social/servicio-social.component';
import { ResidenciasComponent } from './servicios/residencias/residencias.component';
import { IdiomasComponent } from './servicios/idiomas/idiomas.component';
import { Cafeteria1Component } from './servicios/cafeteria1/cafeteria1.component';
import { Cafeteria2Component } from './servicios/cafeteria2/cafeteria2.component';
import { CajasComponent } from './servicios/cajas/cajas.component';
import { CoordinadorDeCarrerasComponent } from './servicios/coordinador-de-carreras/coordinador-de-carreras.component';
import { BecasComponent } from './servicios/becas/becas.component';
import { CentroDeCopiadoComponent } from './servicios/centro-de-copiado/centro-de-copiado.component';
import { PsicologicoComponent } from './servicios/psicologico/psicologico.component';
import { MedicoComponent } from './servicios/medico/medico.component';
import { AsesoriasAcademicasComponent } from './servicios/asesorias-academicas/asesorias-academicas.component';
import { TodosComponent } from './servicios/todos/todos.component';
import { InformeComponent } from './informe/informe.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SistemasComponent } from './carreras/sistemas/sistemas.component';
import { IndustrialComponent } from './carreras/industrial/industrial.component';
import { MecatronicaComponent } from './carreras/mecatronica/mecatronica.component';
import { BioquimicaComponent } from './carreras/bioquimica/bioquimica.component';
import { TicsComponent } from './carreras/tics/tics.component';
import { GestionComponent } from './carreras/gestion/gestion.component';
import { NanoComponent } from './carreras/nano/nano.component';


@NgModule({
  declarations: [
    ClubesGeneralComponent,
    GraficasComponent,
    ClubesComponent,
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
    TodosComponent,
    InformeComponent,
    DashboardComponent,
    SistemasComponent,
    IndustrialComponent,
    MecatronicaComponent,
    BioquimicaComponent,
    TicsComponent,
    GestionComponent,
    NanoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutingModule),
    NgChartsModule,
    MatCardModule,
    DataTablesModule
  ],
  bootstrap: [AdminModule]
})
export class AdminModule { }
