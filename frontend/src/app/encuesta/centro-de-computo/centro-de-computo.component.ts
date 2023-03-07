import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationExtras, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { EncuestasService, encuesta } from '../services/encuesta.service';

@Component({
  selector: 'app-centro-de-computo',
  templateUrl: './centro-de-computo.component.html',
  styleUrls: ['../estilos-servicios.component.css']
})
export class CentroDeComputoComponent implements OnInit {
  id:any;
  dtTrigger: Subject<any> = new Subject<any>();
  navigationExtras : NavigationExtras={
    state: {
      numControl:null,
      carrera:null,
    }
  }

  centroComputo:encuesta ={
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
      this.centroComputo!= this.form.value;
      this.navigationExtras.state=this.alumno;
      this.sendEncuestaCentroComputo(this.centroComputo)
      this.router.navigate(['inicio/servicio_social'],this.navigationExtras);
    } else {
      this.openSnackBar();
    }
  }

  ngOnInit(): void {
    if (this.alumno==null) {
      this.router.navigate(['inicio']);
    }
  }
  openSnackBar() {
    this._snackBar.open('Responde todas las preguntas', undefined, {
      duration: 3000,
    });
  }

  sendEncuestaCentroComputo(centroComputo:encuesta):void{
    if (this.isEnabled == true) {
      this.encuestaService.setEncuestaCentroComputo(centroComputo)
    }
}
}