import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { Subject } from 'rxjs';
import {EncuestasService} from './../services/encuesta.service'
import {alumno,respuestaAlumno} from '../models/encuestas.interface'
// ES6 Modules or TypeScript
import swal from 'sweetalert2';
import { error } from 'jquery';


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
      numeroDeControl: ['', [Validators.required,Validators.minLength(9),Validators.maxLength(9)]],
     carrera: ['', Validators.required]
    });
   }

  
  carreras: carreras[] = [
    {value: '1', viewValue: 'Ingeniería en Sistemas Computacionales'},
    {value: '2', viewValue: 'Ingeniería Industrial'},
    {value: '3', viewValue: 'Ingeniería Mecatrónica'},
    {value: '4', viewValue: 'Ingeniería Bioquímica'},
    {value: '5', viewValue: 'Ingeniería en Tecnologías de la información y Comunicaciones'},
    {value: '6', viewValue: 'Ingeniería En Gestión empresarial'},
    {value: '7', viewValue: 'Ingeniería en Nanotecnología'}
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
        }},
        err =>{
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salió mal!',
            confirmButtonColor: '#57060c'
          })
        }
      )
     
  }
    }
   


}
