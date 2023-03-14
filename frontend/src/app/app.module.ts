import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutes } from "./app-routing.module";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {EncuestaModule} from './encuesta/encuesta.module';
import {StudentsComponent} from './layouts/students/students.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
  MatProgressBarModule
],
declarations: [

  ],
imports: [
 
],

})
export class MaterialModule{} 


@NgModule({
  
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    HttpClientModule,

    BrowserAnimationsModule,
    MaterialModule,
    EncuestaModule,
    FormsModule 
  ],
  declarations: [
    AppComponent,StudentsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
