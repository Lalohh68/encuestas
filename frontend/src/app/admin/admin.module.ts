import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ClubesGeneralComponent } from './clubes-general/clubes-general.component';
import { RouterModule } from '@angular/router';
import { GraficasComponent } from "../encuestas/graficas/graficas.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { NgChartsModule } from 'ng2-charts';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    ClubesGeneralComponent,
    GraficasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutingModule),
    NgChartsModule,
    MatCardModule
  ],
  bootstrap: [AdminModule]
})
export class AdminModule { }
