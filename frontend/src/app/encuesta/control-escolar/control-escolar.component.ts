import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationExtras, Router } from '@angular/router';
import { EncuestasService, encuesta } from '../services/encuesta.service';
import { Subject } from 'rxjs';
import swal from 'sweetalert2';
declare const $: any;

@Component({
  selector: 'app-control-escolar',
  templateUrl: './control-escolar.component.html',
  styleUrls: ['../estilos-servicios.component.css']
})
export class ControlEscolarComponent implements OnInit {
  matError=false;
  dtTrigger: Subject<any> = new Subject<any>();
  navigationExtras : NavigationExtras={
    state: {
      numControl:null,
      carrera:null,
    }
  }
  controlEscolar:encuesta ={
    idAlumno:"",
    horario: "",
    disponibilidad: "",
    atencion:"",
    amabilidad:"",
    comentarios:""
    }
  preguntasCompletas: boolean = false;
  club:any;
  extraEscolares = {
    horario: null,
  };
  disable: boolean = false;
  isEnabled: any;
  form;
  alumno:any=[]
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
      comentarios: ['']
    }); 
    const navigation=this.router.getCurrentNavigation();
  this.alumno= navigation?.extras?.state;
  }

 
  

  servicioUtilizado() {
    this.isEnabled = true;
  }
  servicioNoUtilizado() {
    this.isEnabled = false;
  }

  siguiente() {
    if (this.form.valid || this.isEnabled == false) {
      this.controlEscolar!= this.form.value;
      this.navigationExtras.state=this.alumno;
      this.sendEncuestaControlEscolar(this.controlEscolar)
      this.router.navigate(['encuesta/tutorias'],this.navigationExtras);
    } else {
      this.matError=true;
      this.showMessage();
    }
  }

  ngOnInit(): void {
    if (this.alumno==null) {
      this.router.navigate(['encuesta/inicio']);
    }
    //this.encuestaService.getClubes$.subscribe((clubes:encuesta) =>this.club = clubes)
  }
  openSnackBar() {
    this._snackBar.open('Responde todas las preguntas', undefined, {
      duration: 3000,
    });
  }
  sendEncuestaControlEscolar(controlEscolar:encuesta):void{
    if (this.isEnabled == true) {
      this.encuestaService.setEncuestaControlEscolar(controlEscolar)
    }
    
    }

    showMessage(){
      swal.fire({
      title: 'Responde todas las preguntas',
      timer: 1500,
      background:'#ffce30',
      color:'#fff',
      backdrop:false,
      showConfirmButton:false,
    })
    }
}

