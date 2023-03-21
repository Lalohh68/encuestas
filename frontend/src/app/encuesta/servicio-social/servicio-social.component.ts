import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationExtras, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { EncuestasService, encuesta } from '../services/encuesta.service';
declare var window:any;
@Component({
  selector: 'app-servicio-social',
  templateUrl: './servicio-social.component.html',
  styleUrls: ['../estilos-servicios.component.css']
})
export class ServicioSocialComponent implements OnInit {
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
    clubes:encuesta ={
      idAlumno:"",
      horario: "",
      disponibilidad: "",
      atencion:"",
      amabilidad:"",
      comentarios:""
      }
      biblioteca:encuesta ={
        idAlumno:"",
        horario: "",
        disponibilidad: "",
        atencion:"",
        amabilidad:"",
        comentarios:""
        }
        centroComputo:encuesta ={
          idAlumno:"",
          horario: "",
          disponibilidad: "",
          atencion:"",
          amabilidad:"",
          comentarios:""
          }
          controlEscolar:encuesta ={
            idAlumno:"",
            horario: "",
            disponibilidad: "",
            atencion:"",
            amabilidad:"",
            comentarios:""
            }
            tutorias:encuesta ={
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
  modal: any;
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
      this.router.navigate(['encuesta/residencias']);
    } else {
      this.openSnackBar();
    }
  }

  ngOnInit() {
    if (this.alumno==null) {
      this.router.navigate(['encuesta/inicio']);
    }
    this.modal = new window.bootstrap.Modal(document.getElementById('myModal'))
    this.encuestaService.getEncuestaBiblioteca$.subscribe((biblioteca:encuesta) =>this.biblioteca = biblioteca)
this.encuestaService.getEncuestaClubes$.subscribe((clubes:encuesta) =>this.clubes = clubes)
this.encuestaService.getEncuestaCentroComputo$.subscribe((centroComputo:encuesta) =>this.centroComputo = centroComputo)
this.encuestaService.getEncuestaControlEscolar$.subscribe((controlEscolar:encuesta) =>this.controlEscolar = controlEscolar)
this.encuestaService.getEncuestaTutorias$.subscribe((tutorias:encuesta) =>this.tutorias = tutorias)

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
  terminar(){
    try {
      this.encuestaService.registrarAlumno(this.alumno).subscribe(
      data =>{this.id=data,this.dtTrigger;
        this.clubes.idAlumno=this.id
        this.biblioteca.idAlumno=this.id
        this.centroComputo.idAlumno=this.id
        this.controlEscolar.idAlumno=this.id
        this.servicioSocial.idAlumno=this.id
        this.tutorias.idAlumno=this.id

        if (this.clubes.amabilidad != "" && this.clubes.atencion != "" && this.clubes.disponibilidad != "" && this.clubes.horario != "") {
          this.encuestaService.registrarEncuestaClubes(this.clubes).subscribe()
        }
        if (this.biblioteca.amabilidad != "" && this.biblioteca.atencion != "" && this.biblioteca.disponibilidad != "" && this.biblioteca.horario != "") {
          this.encuestaService.registrarEncuestaBiblioteca(this.biblioteca).subscribe()
        }
        if (this.centroComputo.amabilidad != "" && this.centroComputo.atencion != "" && this.centroComputo.disponibilidad != "" && this.centroComputo.horario != "") {
          this.encuestaService.registrarEncuestaCentroDeComputo(this.centroComputo).subscribe()
        }
        if (this.controlEscolar.amabilidad != "" && this.controlEscolar.atencion != "" && this.controlEscolar.disponibilidad != "" && this.controlEscolar.horario != "") {
          this.encuestaService.registrarEncuestaControlEscolar(this.controlEscolar).subscribe()
        }
        if (this.servicioSocial.amabilidad != "" && this.servicioSocial.atencion != "" && this.servicioSocial.disponibilidad != "" && this.servicioSocial.horario != "") {
          this.encuestaService.registrarEncuestaServicioSocial(this.servicioSocial).subscribe()
        }
        if (this.tutorias.amabilidad != "" && this.tutorias.atencion != "" && this.tutorias.disponibilidad != "" && this.tutorias.horario != "") {
          this.encuestaService.registrarEncuestaTutorias(this.tutorias).subscribe()
        }
        this.modal.show();
      }
    ); 
    } catch (error) {
      
    }
    
  }
  inicio(){
    this.router.navigate(['inicio']);
  }
}
