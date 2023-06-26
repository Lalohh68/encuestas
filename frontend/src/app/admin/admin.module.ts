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
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import {MatExpansionModule} from '@angular/material/expansion'
import {MatDividerModule} from '@angular/material/divider';
import { AsesoriasComponent } from './comentarios/asesorias/asesorias.component';
import { ClubesComentariosComponent } from './comentarios/clubes-comentarios/clubes-comentarios.component';
import { ControlEscolarComentariosComponent } from './comentarios/control-escolar-comentarios/control-escolar-comentarios.component';
import { TutoriasComentariosComponent } from './comentarios/tutorias-comentarios/tutorias-comentarios.component';
import { BibliotecaComentariosComponent } from './comentarios/biblioteca-comentarios/biblioteca-comentarios.component';
import { CentroComputoComentariosComponent } from './comentarios/centro-computo-comentarios/centro-computo-comentarios.component';
import { ServicioSocialComentariosComponent } from './comentarios/servicio-social-comentarios/servicio-social-comentarios.component';
import { ResidenciasComentariosComponent } from './comentarios/residencias-comentarios/residencias-comentarios.component';
import { IdiomasComentariosComponent } from './comentarios/idiomas-comentarios/idiomas-comentarios.component';
import { Cafeteria1ComentariosComponent } from './comentarios/cafeteria1-comentarios/cafeteria1-comentarios.component';
import { Cafeteria2ComentariosComponent } from './comentarios/cafeteria2-comentarios/cafeteria2-comentarios.component';
import { CajasComentariosComponent } from './comentarios/cajas-comentarios/cajas-comentarios.component';
import { CoordinadorComentariosComponent } from './comentarios/coordinador-comentarios/coordinador-comentarios.component';
import { BecasComentariosComponent } from './comentarios/becas-comentarios/becas-comentarios.component';
import { CentroCopiadoComentariosComponent } from './comentarios/centro-copiado-comentarios/centro-copiado-comentarios.component';
import { PsicologicoComentariosComponent } from './comentarios/psicologico-comentarios/psicologico-comentarios.component';
import { MedicoComentariosComponent } from './comentarios/medico-comentarios/medico-comentarios.component'

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
    ListaAlumnosComponent,
    AsesoriasComponent,
    ClubesComentariosComponent,
    ControlEscolarComentariosComponent,
    TutoriasComentariosComponent,
    BibliotecaComentariosComponent,
    CentroComputoComentariosComponent,
    ServicioSocialComentariosComponent,
    ResidenciasComentariosComponent,
    IdiomasComentariosComponent,
    Cafeteria1ComentariosComponent,
    Cafeteria2ComentariosComponent,
    CajasComentariosComponent,
    CoordinadorComentariosComponent,
    BecasComentariosComponent,
    CentroCopiadoComentariosComponent,
    PsicologicoComentariosComponent,
    MedicoComentariosComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutingModule),
    NgChartsModule,
    MatCardModule,
    DataTablesModule,MatExpansionModule,
    MatDividerModule
  ],
  bootstrap: [AdminModule]
})
export class AdminModule { }
