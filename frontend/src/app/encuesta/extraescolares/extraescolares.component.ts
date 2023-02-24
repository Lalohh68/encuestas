import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EncuestasService } from "../services/encuesta.service";
import { Subject } from 'rxjs';
declare const $: any;

@Component({
  selector: 'app-extraescolares',
  templateUrl: './extraescolares.component.html',
  styleUrls: ['../estilos-servicios.component.css']
})
export class ExtraescolaresComponent implements OnInit {
  id:any;
  dtTrigger: Subject<any> = new Subject<any>();
  navigationExtras : NavigationExtras={
    state: {
      numControl:null,
      carrera:null,
      clubes:{
        horario:null,
        disponibilidad: null,
        atencion:null,
        amabilidad:null
      }
    }
  }

  clubes:any=[]
  preguntasCompletas: boolean = false;
  extraEscolares = {
    horario: null,
  };
  disable: boolean = false;
  isEnabled: any;
  form;
  datos:any=[]
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private encuestaService: EncuestasService
  ) {
    this.form = formBuilder.group({
      horario: ['', Validators.required],
      disponibilidad: ['', Validators.required],
      atencion: ['', Validators.required],
      amabilidad: ['', Validators.required],
    });
    
    const navigation=this.router.getCurrentNavigation();
    this.datos= navigation?.extras?.state;
    
  }

  servicioUtilizado() {
    this.isEnabled = true;
  }
  servicioNoUtilizado() {
    this.isEnabled = false;
  }

  siguiente() {
  
    if (this.form.valid || this.isEnabled == false) {
      this.router.navigate(['inicio/control_escolar']);
    } else {
      this.openSnackBar();
    }
  }

  ngOnInit(): void {}
  openSnackBar() {
    this._snackBar.open('Responde todas las preguntas', undefined, {
      duration: 3000,
    });
  }

registrarEncuesta(id:any){

}

  registrarAlumno(){
 
    this.encuestaService.registrarAlumno(this.datos).subscribe(
      data =>{this.id =data;
      this.registrarEncuesta(this.id)}
    ); 
  }
  }
  

