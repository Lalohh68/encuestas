import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { Subject } from 'rxjs';
import {EncuestasService} from './../services/encuesta.service'
import {alumno,respuestaAlumno} from '../models/encuestas.interface'
declare const $: any;
declare var window:any;

interface carreras {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  navigationExtras : NavigationExtras={
    state: {
    }
  }
  
  modal:any;
  datos:any=[]
  idAlumno:any;
  dtTrigger: Subject<any> = new Subject<any>();

  alumno: alumno = {
    numControl:"",
    carrera:""
  };
  getFolio:any={
    folio:""
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

form;
  constructor(private router: Router,private formBuilder: FormBuilder,private encuestaService: EncuestasService){
    this.form = formBuilder.group({
      numeroDeControl: ['', Validators.required],
     carrera: ['', Validators.required]
    });
   }

  
  carreras: carreras[] = [
    {value: 'Ingeniería en Sistemas Computacionales', viewValue: 'Ingeniería en Sistemas Computacionales'},
    {value: 'Ingeniería Industrial', viewValue: 'Ingeniería Industrial'},
    {value: 'Ingeniería Mecatrónica', viewValue: 'Ingeniería Mecatrónica'},
    {value: 'Ingeniería Bioquímica', viewValue: 'Ingeniería Bioquímica'},
    {value: 'Ingeniería en Tecnologías de la información y Comunicaciones', viewValue: 'Ingeniería en Tecnologías de la información y Comunicaciones'},
    {value: 'Ingeniería En Gestión empresarial', viewValue: 'Ingeniería En Gestión empresarial'},
    {value: 'Ingeniería en Nanotecnología', viewValue: 'Ingeniería en Nanotecnología'}
  ];

iniciar(){

}



  ngOnInit(): void {
    this.modal = new window.bootstrap.Modal(document.getElementById('myModalInicio'))


  

  }
showToast(){
  const toastLiveExample = document.getElementById('liveToast')

    const toast = new window.bootstrap.Toast(toastLiveExample)

    toast.show()
}

  consultar() {
    if (this.form.valid) {
        this.encuestaService.alumno(this.alumno)
      .subscribe(
        data => {this.getFolio=data;
        if (this.getFolio == null) {
          this.navigationExtras.state=this.alumno;
          this.router.navigate(['encuesta/clubes'],this.navigationExtras)
          
        } else {
          this.modal.show();
        }}
      )
     
  }
    }
   

registrarAlumno(){
 
  this.encuestaService.registrarAlumno(this.alumno).subscribe(
    data =>{this.idAlumno=data,this.dtTrigger;}
  ); 
  localStorage.setItem("id",this.idAlumno);
}
}
