import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from "../layouts/admin/admin.component";
import { ClubesGeneralComponent } from "../admin/clubes-general/clubes-general.component";
import { GraficasComponent } from "../encuestas/graficas/graficas.component";

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
                path:'clubes',
                component: GraficasComponent
              },
              
            ]
          },
          
        ]
        
        },
    
];

