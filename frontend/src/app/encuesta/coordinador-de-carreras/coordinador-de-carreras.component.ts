import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationExtras, Router } from '@angular/router';
import { EncuestasService, encuesta } from '../services/encuesta.service';
import { Subject } from 'rxjs';
import swal from 'sweetalert2';
declare const $: any;

@Component({
  selector: 'app-coordinador-de-carreras',
  templateUrl: './coordinador-de-carreras.component.html',
  styleUrls: ['../estilos-servicios.component.css']
})
export class CoordinadorDeCarrerasComponent implements OnInit {
  matError=false;
  id:any;
  dtTrigger: Subject<any> = new Subject<any>();
  navigationExtras : NavigationExtras={
    state: {
      numControl:null,
      carrera:null,
    }
  }

  coordinadorDeCarreras:encuesta ={
    idAlumno:"",
    horario: "",
    disponibilidad: "",
    atencion:"",
    amabilidad:"",
    comentarios:""
    }
  preguntasCompletas: boolean = false;
  
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
      this.coordinadorDeCarreras!= this.form.value;
      this.navigationExtras.state=this.alumno;
      this.sendEncuestaCoordinadorDeCarreras(this.coordinadorDeCarreras)
      this.router.navigate(['encuesta/becas'],this.navigationExtras);
    } else {
      this.matError=true;
      this.showMessage();
    }
  }

  ngOnInit(): void {
    if (this.alumno==null) {
      this.router.navigate(['encuesta/inicio']);
    }
  }
  openSnackBar() {
    this._snackBar.open('Responde todas las preguntas', undefined, {
      duration: 3000,
    });
  }

  sendEncuestaCoordinadorDeCarreras(coordinadorDeCarreras:encuesta):void{
    if (this.isEnabled == true) {
      this.encuestaService.setEncuestaCoordinadorCarreras(coordinadorDeCarreras)
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