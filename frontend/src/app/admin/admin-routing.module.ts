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
            component: ClubesGeneralComponent
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
                component: ClubesComponent
              },
              {
                path:'control_escolar',
                component: ControlEscolarComponent
              },
              {
                path:'tutorias',
                component: TutoriasComponent
              },
              {
                path:'biblioteca',
                component: BibliotecaComponent
              },
              {
                path:'centro_de_computo',
                component: CentroDeComputoComponent
              },
              {
                path:'servicio_social',
                component: ServicioSocialComponent
              },
              {
                path:'residencias',
                component: ResidenciasComponent
              },
              {
                path:'idiomas',
                component: IdiomasComponent
              },
              {
                path:'cafeteria_1',
                component: Cafeteria1Component
              },
              {
                path:'cafeteria_2',
                component: Cafeteria2Component
              },
              {
                path:'cajas',
                component: CajasComponent
              },
              {
                path:'coordinador_de_carreras',
                component: CoordinadorDeCarrerasComponent
              },
              {
                path:'becas',
                component: BecasComponent
              },
              {
                path:'centro_de_copiado',
                component: CentroDeCopiadoComponent
              },
              {
                path:'psicologico',
                component: PsicologicoComponent
              },
              {
                path:'medico',
                component: MedicoComponent
              },
              {
                path:'asesorias_academicas',
                component: AsesoriasAcademicasComponent
              }
            ]
          },
          
        ]
        
        },
    
];

