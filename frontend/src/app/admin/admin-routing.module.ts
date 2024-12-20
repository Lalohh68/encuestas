import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from "../layouts/admin/admin.component";
import { ClubesGeneralComponent } from "../admin/clubes-general/clubes-general.component";
import { GraficasComponent } from "../encuestas/graficas/graficas.component";
import {ClubesComponent} from "./servicios/clubes/clubes.component"
import { ControlEscolarComponent } from "./servicios/control-escolar/control-escolar.component";
import { TutoriasComponent } from "./servicios/tutorias/tutorias.component";
import { BibliotecaComponent } from "./servicios/biblioteca/biblioteca.component";
import { CentroDeComputoComponent } from "./servicios/centro-de-computo/centro-de-computo.component";
import { ServicioSocialComponent } from "./servicios/servicio-social/servicio-social.component";
import { ResidenciasComponent } from "./servicios/residencias/residencias.component";
import { IdiomasComponent } from "./servicios/idiomas/idiomas.component";
import { Cafeteria1Component } from "./servicios/cafeteria1/cafeteria1.component";
import { Cafeteria2Component } from "./servicios/cafeteria2/cafeteria2.component";
import { CajasComponent } from "./servicios/cajas/cajas.component";
import { CoordinadorDeCarrerasComponent } from "./servicios/coordinador-de-carreras/coordinador-de-carreras.component";
import { BecasComponent } from "./servicios/becas/becas.component";
import { CentroDeCopiadoComponent } from "./servicios/centro-de-copiado/centro-de-copiado.component";
import { PsicologicoComponent } from "./servicios/psicologico/psicologico.component";
import { MedicoComponent } from "./servicios/medico/medico.component";
import { AsesoriasAcademicasComponent } from "./servicios/asesorias-academicas/asesorias-academicas.component";
import { TodosComponent } from "./servicios/todos/todos.component";
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
import { MedicoComentariosComponent } from './comentarios/medico-comentarios/medico-comentarios.component';

  export const AdminRoutingModule: Routes = [
  
{
      path: 'admin',
      redirectTo: 'admin/dashboard',
      pathMatch: 'full',
    },
      {
        path: 'admin',
        component: AdminComponent,
        children:[
          {
            path:'dashboard',
            component: DashboardComponent
          },
          {
            path:'informe', component: InformeComponent
          },
          {
            path:'servicios',
            children:[
              {
              path:'todos',
              component: TodosComponent
            },
              {
                path:'clubes',
                component: ClubesComentariosComponent
              },
              {
                path:'control_escolar',
                component: ControlEscolarComentariosComponent
              },
              {
                path:'tutorias',
                component: TutoriasComentariosComponent
              },
              {
                path:'biblioteca',
                component: BibliotecaComentariosComponent
              },
              {
                path:'centro_de_computo',
                component: CentroComputoComentariosComponent
              },
              {
                path:'servicio_social',
                component: ServicioSocialComentariosComponent
              },
              {
                path:'residencias',
                component: ResidenciasComentariosComponent
              },
              {
                path:'idiomas',
                component: IdiomasComentariosComponent
              },
              {
                path:'cafeteria_1',
                component: Cafeteria1ComentariosComponent
              },
              {
                path:'cafeteria_2',
                component: Cafeteria2ComentariosComponent
              },
              {
                path:'cajas',
                component: CajasComentariosComponent
              },
              {
                path:'coordinador_de_carreras',
                component: CoordinadorComentariosComponent
              },
              {
                path:'becas',
                component: BecasComentariosComponent
              },
              {
                path:'centro_de_copiado',
                component: CentroCopiadoComentariosComponent
              },
              {
                path:'psicologico',
                component: PsicologicoComentariosComponent
              },
              {
                path:'medico',
                component: MedicoComentariosComponent
              },
              {
                path:'asesorias_academicas',
                component: AsesoriasComponent
              }
            ]
          },
          {
            path: 'carreras',
            children:[
              {path:'sistemas',
                component: SistemasComponent},
                {path:'industrial',
                component: IndustrialComponent},
                {path:'mecatronica',
                component: MecatronicaComponent},
                {path:'bioquimica',
                component: BioquimicaComponent},
                {path:'tics',
                component: TicsComponent},
                {path:'gestion',
                component: GestionComponent},
                {path:'nano',
                component: NanoComponent}
            ]},
            {
              path: 'alumnos',
              component:ListaAlumnosComponent
              }
          
        ]
        
        },
    
];

