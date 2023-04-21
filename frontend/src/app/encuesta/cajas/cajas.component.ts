import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationExtras, Router } from '@angular/router';
import { EncuestasService, encuesta } from '../services/encuesta.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cajas',
  templateUrl: './cajas.component.html',
  styleUrls: ['../estilos-servicios.component.css']
})
export class CajasComponent implements OnInit {
  matError=false;
  id:any;
  dtTrigger: Subject<any> = new Subject<any>();
  navigationExtras : NavigationExtras={
    state: {
      numControl:null,
      carrera:null,
    }
  }

  cajas:encuesta ={
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
      this.cajas!= this.form.value;
      this.navigationExtras.state=this.alumno;
      this.sendEncuestaCajas(this.cajas)
      this.router.navigate(['encuesta/jefes_de_division'],this.navigationExtras);
    } else {
      this.matError=true;
      this.openSnackBar();
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

  sendEncuestaCajas(cajas:encuesta):void{
    if (this.isEnabled == true) {
      this.encuestaService.setEncuestaCajas(cajas)
    }
}
}