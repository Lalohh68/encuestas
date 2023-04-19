import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { APP_BASE_HREF } from '@angular/common';

import { CommonModule } from '@angular/common';


import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';

import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { MatBottomSheetModule} from '@angular/material/bottom-sheet';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {EncuestaModule} from './encuesta/encuesta.module';
import {StudentsComponent} from './layouts/students/students.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminComponent } from './layouts/admin/admin.component';
import { AdminModule } from "../app/admin/admin.module";
import {  } from "../app/layouts/admin/admin.component";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutes } from './app-routing.module';
import{ SidebarComponent} from './sidebar/sidebar.component';
import { BodyComponent } from './layouts/admin/body/body.component';
import { SublevelMenuComponent } from './sidebar/sublevel-menu.component';


@NgModule({
exports:[
  MatCardModule, 
  MatFormFieldModule,
  MatSelectModule,
  MatButtonModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatSliderModule,
  MatToolbarModule,
  MatInputModule,
  MatIconModule,
  MatProgressBarModule,
   MatAutocompleteModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatCheckboxModule,
    MatStepperModule,
    MatIconModule,
    MatIconModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
    
    
],
imports: [
 
],

})
export class MaterialModule{} 


@NgModule({
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    RouterModule.forRoot(AppRoutes,{
     useHash:true
    }),
    HttpClientModule,
    MaterialModule,
    EncuestaModule,
    AdminModule,
    FormsModule, 
  ],
  declarations: [
    AppComponent,StudentsComponent,AdminComponent,
    SidebarComponent, BodyComponent,SublevelMenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
