import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationExtras, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { EncuestasService, encuesta } from '../services/encuesta.service';
import swal from 'sweetalert2';
declare const $: any;
@Component({
  selector: 'app-servicio-social',
  templateUrl: './servicio-social.component.html',
  styleUrls: ['../estilos-servicios.component.css']
})
export class ServicioSocialComponent implements OnInit {
  matError=false;
  id:any;
  dtTrigger: Subject<any> = new Subject<any>();
  navigationExtras : NavigationExtras={
    state: {
      numControl:null,
      carrera:null,
    }
  }

  servicioSocial:encuesta ={
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
      this.servicioSocial!= this.form.value;
      this.navigationExtras.state=this.alumno;
      this.sendEncuestaServicioSocial(this.servicioSocial)
      this.router.navigate(['encuesta/residencias'],this.navigationExtras);
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

  sendEncuestaServicioSocial(servicioSocial:encuesta):void{
    if (this.isEnabled == true) {
      this.encuestaService.setEncuestaServicioSocial(servicioSocial)
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