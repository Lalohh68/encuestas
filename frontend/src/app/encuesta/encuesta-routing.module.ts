import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import {ExtraescolaresComponent} from './extraescolares/extraescolares.component'
import { StudentsComponent } from '../layouts/students/students.component';
import { ControlEscolarComponent } from './control-escolar/control-escolar.component';
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
import { CentroDeCopiadoComponent } from './centro-de-copiado/centro-de-copiado.component';
import { PsicologicoComponent } from './psicologico/psicologico.component';
import { MedicoComponent } from './medico/medico.component';
import { BecasComponent } from './becas/becas.component';
import { AsesoriasAcademicasComponent } from './asesorias-academicas/asesorias-academicas.component';
import { GraficasComponent } from "../encuestas/graficas/graficas.component";
import { TablaComponent } from "../encuestas/tabla/tabla.component";

export const EncuestaRoutingModule: Routes = [
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
      {
        path: 'inicio',
        component: StudentsComponent,
        children:[
          {
            path:'',
            component: InicioComponent
          },
          {
            path:'clubes',
            component: ExtraescolaresComponent
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
            path:'jefes_de_division',
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
          ,
          {
            path:'grafica',
            component: GraficasComponent
          },
          {
            path:'tabla',
            component: TablaComponent
          }
        ]
        
        },
        {
          path: '**',
          component: StudentsComponent,
          children:[
            {
              path:'',
              component: InicioComponent
            }]
    
    
    
    
          }
];


