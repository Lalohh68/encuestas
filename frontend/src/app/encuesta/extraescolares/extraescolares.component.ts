import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EncuestasService, encuesta } from "../services/encuesta.service";
import { Subject } from 'rxjs';
import swal from 'sweetalert2';
declare const $: any;
declare var window:any;

@Component({
  selector: 'app-extraescolares',
  templateUrl: './extraescolares.component.html',
  styleUrls: ['../estilos-servicios.component.css']
})
export class ExtraescolaresComponent implements OnInit {
  matError=false;
  id:any;
  dtTrigger: Subject<any> = new Subject<any>();
  navigationExtras : NavigationExtras={
    state: {
    }
  }

  clubes:encuesta ={
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
      this.clubes!= this.form.value;
      this.navigationExtras.state=this.alumno;
      this.sendEncuestaclubes(this.clubes)
      this.router.navigate(['encuesta/control_escolar'],this.navigationExtras);
    } else {
      this.showMessage()
      this.matError=true
    }
  }

  ngOnInit(): void {
    // if (this.alumno==null) {
    //   this.router.navigate(['encuesta/inicio']);
    // }
  }

  openSnackBar() {
    this._snackBar.open('Responde todas las preguntas', undefined, {
      duration: 3000,
    });
  }

sendEncuestaclubes(clubes:encuesta):void{
  if (this.isEnabled == true) {
    this.encuestaService.setEncuestaClubes(clubes)
  }

}

terminar(){
  this.encuestaService.registrarAlumno(this.alumno).subscribe(
    data =>{this.id=data,this.dtTrigger;
      this.clubes.idAlumno=this.id
      console.log(this.id,this.clubes)
      this.encuestaService.registrarEncuestaClubes(this.clubes).subscribe()}
  ); 
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
  

