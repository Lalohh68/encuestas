import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationExtras, Router } from '@angular/router';
import { EncuestasService, encuesta } from '../services/encuesta.service';
import { Subject } from 'rxjs';
import swal from 'sweetalert2';
declare const $: any;
declare var window:any;

@Component({
  selector: 'app-asesorias-academicas',
  templateUrl: './asesorias-academicas.component.html',
  styleUrls: ['../estilos-servicios.component.css'],
})
export class AsesoriasAcademicasComponent implements OnInit {
  matError=false;
  id: any;
  dtTrigger: Subject<any> = new Subject<any>();
  navigationExtras: NavigationExtras = {
    state: {
      numControl: null,
      carrera: null,
    },
  };

  servicioSocial: encuesta = {
    idAlumno: '',
    horario: '',
    disponibilidad: '',
    atencion: '',
    amabilidad: '',
    comentarios: '',
  };
  clubes: encuesta = {
    idAlumno: '',
    horario: '',
    disponibilidad: '',
    atencion: '',
    amabilidad: '',
    comentarios: '',
  };
  biblioteca: encuesta = {
    idAlumno: '',
    horario: '',
    disponibilidad: '',
    atencion: '',
    amabilidad: '',
    comentarios: '',
  };
  centroComputo: encuesta = {
    idAlumno: '',
    horario: '',
    disponibilidad: '',
    atencion: '',
    amabilidad: '',
    comentarios: '',
  };
  controlEscolar: encuesta = {
    idAlumno: '',
    horario: '',
    disponibilidad: '',
    atencion: '',
    amabilidad: '',
    comentarios: '',
  };
  tutorias: encuesta = {
    idAlumno: '',
    horario: '',
    disponibilidad: '',
    atencion: '',
    amabilidad: '',
    comentarios: '',
  };
  residencias: encuesta = {
    idAlumno: '',
    horario: '',
    disponibilidad: '',
    atencion: '',
    amabilidad: '',
    comentarios: '',
  };
  idiomas: encuesta = {
    idAlumno: '',
    horario: '',
    disponibilidad: '',
    atencion: '',
    amabilidad: '',
    comentarios: '',
  };
  cafeteria1: encuesta = {
    idAlumno: '',
    horario: '',
    disponibilidad: '',
    atencion: '',
    amabilidad: '',
    comentarios: '',
  };
  cafeteria2: encuesta = {
    idAlumno: '',
    horario: '',
    disponibilidad: '',
    atencion: '',
    amabilidad: '',
    comentarios: '',
  };
  cajas: encuesta = {
    idAlumno: '',
    horario: '',
    disponibilidad: '',
    atencion: '',
    amabilidad: '',
    comentarios: '',
  };
  coordinadorDeCarreras: encuesta = {
    idAlumno: '',
    horario: '',
    disponibilidad: '',
    atencion: '',
    amabilidad: '',
    comentarios: '',
  };
  becas: encuesta = {
    idAlumno: '',
    horario: '',
    disponibilidad: '',
    atencion: '',
    amabilidad: '',
    comentarios: '',
  };
  centroDeCopiado: encuesta = {
    idAlumno: '',
    horario: '',
    disponibilidad: '',
    atencion: '',
    amabilidad: '',
    comentarios: '',
  };
  psicologico: encuesta = {
    idAlumno: '',
    horario: '',
    disponibilidad: '',
    atencion: '',
    amabilidad: '',
    comentarios: '',
  };
  medico: encuesta = {
    idAlumno: '',
    horario: '',
    disponibilidad: '',
    atencion: '',
    amabilidad: '',
    comentarios: '',
  };
  asesoriasAcademicas: encuesta = {
    idAlumno: '',
    horario: '',
    disponibilidad: '',
    atencion: '',
    amabilidad: '',
    comentarios: '',
  };
  preguntasCompletas: boolean = false;

  disable: boolean = false;
  isEnabled: any;
  form;
  alumno: any = [];
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
      comentarios: [''],
    });

    const navigation = this.router.getCurrentNavigation();
    this.alumno = navigation?.extras?.state;
  }

  servicioUtilizado() {
    this.isEnabled = true;
  }
  servicioNoUtilizado() {
    this.isEnabled = false;
  }

  siguiente() {
    if (this.form.valid || this.isEnabled == false) {
      this.asesoriasAcademicas != this.form.value;
      this.terminar()
    } else {
      this.matError=true;
      this.showMessage()
    }
  }

  ngOnInit() {
    if (this.alumno == null) {
      this.router.navigate(['encuesta/inicio']);
    }
    this.modal = new window.bootstrap.Modal(document.getElementById('myModal'));
    this.encuestaService.getEncuestaBiblioteca$.subscribe(
      (biblioteca: encuesta) => (this.biblioteca = biblioteca)
    );
    this.encuestaService.getEncuestaClubes$.subscribe(
      (clubes: encuesta) => (this.clubes = clubes)
    );
    this.encuestaService.getEncuestaCentroComputo$.subscribe(
      (centroComputo: encuesta) => (this.centroComputo = centroComputo)
    );
    this.encuestaService.getEncuestaControlEscolar$.subscribe(
      (controlEscolar: encuesta) => (this.controlEscolar = controlEscolar)
    );
    this.encuestaService.getEncuestaTutorias$.subscribe(
      (tutorias: encuesta) => (this.tutorias = tutorias)
    );
    this.encuestaService.getEncuestaServicioSocial$.subscribe(
      (servicioSocial: encuesta) => (this.servicioSocial = servicioSocial)
    );
    this.encuestaService.getEncuestaResidencias$.subscribe(
      (residencias: encuesta) => (this.residencias = residencias)
    );
    this.encuestaService.getEncuestaIdiomas$.subscribe(
      (idiomas: encuesta) => (this.idiomas = idiomas)
    );
    this.encuestaService.getEncuestaCafeteria1$.subscribe(
      (cafeteria1: encuesta) => (this.cafeteria1 = cafeteria1)
    );
    this.encuestaService.getEncuestaCafeteria2$.subscribe(
      (cafeteria2: encuesta) => (this.cafeteria2 = cafeteria2)
    );
    this.encuestaService.getEncuestaCajas$.subscribe(
      (cajas: encuesta) => (this.cajas = cajas)
    );
    this.encuestaService.getEncuestaCoordinadorCarreras$.subscribe(
      (coordinadorDeCarreras: encuesta) => (this.coordinadorDeCarreras = coordinadorDeCarreras)
    );
    this.encuestaService.getEncuestaBecas$.subscribe(
      (becas: encuesta) => (this.becas = becas)
    );
    this.encuestaService.getEncuestaCentroCopiado$.subscribe(
      (centroDeCopiado: encuesta) => (this.centroDeCopiado = centroDeCopiado)
    );
    this.encuestaService.getEncuestaPsicologico$.subscribe(
      (psicologico: encuesta) => (this.psicologico = psicologico)
    );
    this.encuestaService.getEncuestaMedico$.subscribe(
      (medico: encuesta) => (this.medico = medico)
    );

  }
  openSnackBar() {
    this._snackBar.open('Responde todas las preguntas', undefined, {
      duration: 3000,
    });
  }

  
  terminar() {
    try {
      this.encuestaService.registrarAlumno(this.alumno).subscribe((data) => {
        (this.id = data), this.dtTrigger;
        this.clubes.idAlumno = this.id;
        this.biblioteca.idAlumno = this.id;
        this.centroComputo.idAlumno = this.id;
        this.controlEscolar.idAlumno = this.id;
        this.servicioSocial.idAlumno = this.id;
        this.tutorias.idAlumno = this.id;
        this.residencias.idAlumno = this.id;
        this.idiomas.idAlumno = this.id;
        this.cafeteria1.idAlumno = this.id;
        this.cafeteria2.idAlumno = this.id;
        this.cajas.idAlumno = this.id;
        this.coordinadorDeCarreras.idAlumno = this.id;
        this.becas.idAlumno = this.id;
        this.centroDeCopiado.idAlumno = this.id;
        this.psicologico.idAlumno = this.id;
        this.medico.idAlumno = this.id;
        this.asesoriasAcademicas.idAlumno = this.id;

        if (
          this.clubes.amabilidad != '' &&
          this.clubes.atencion != '' &&
          this.clubes.disponibilidad != '' &&
          this.clubes.horario != ''
        ) {
          this.encuestaService.registrarEncuestaClubes(this.clubes).subscribe();
        }
        if (
          this.biblioteca.amabilidad != '' &&
          this.biblioteca.atencion != '' &&
          this.biblioteca.disponibilidad != '' &&
          this.biblioteca.horario != ''
        ) {
          this.encuestaService
            .registrarEncuestaBiblioteca(this.biblioteca)
            .subscribe();
        }
        if (
          this.centroComputo.amabilidad != '' &&
          this.centroComputo.atencion != '' &&
          this.centroComputo.disponibilidad != '' &&
          this.centroComputo.horario != ''
        ) {
          this.encuestaService
            .registrarEncuestaCentroDeComputo(this.centroComputo)
            .subscribe();
        }
        if (
          this.controlEscolar.amabilidad != '' &&
          this.controlEscolar.atencion != '' &&
          this.controlEscolar.disponibilidad != '' &&
          this.controlEscolar.horario != ''
        ) {
          this.encuestaService
            .registrarEncuestaControlEscolar(this.controlEscolar)
            .subscribe();
        }
        if (
          this.servicioSocial.amabilidad != '' &&
          this.servicioSocial.atencion != '' &&
          this.servicioSocial.disponibilidad != '' &&
          this.servicioSocial.horario != ''
        ) {
          this.encuestaService
            .registrarEncuestaServicioSocial(this.servicioSocial)
            .subscribe();
        }
        if (
          this.tutorias.amabilidad != '' &&
          this.tutorias.atencion != '' &&
          this.tutorias.disponibilidad != '' &&
          this.tutorias.horario != ''
        ) {
          this.encuestaService
            .registrarEncuestaTutorias(this.tutorias)
            .subscribe();
        }
        if (
          this.residencias.amabilidad != '' &&
          this.residencias.atencion != '' &&
          this.residencias.disponibilidad != '' &&
          this.residencias.horario != ''
        ) {
          this.encuestaService
            .registrarEncuestaResidencias(this.residencias)
            .subscribe();
        }
        if (
          this.idiomas.amabilidad != '' &&
          this.idiomas.atencion != '' &&
          this.idiomas.disponibilidad != '' &&
          this.idiomas.horario != ''
        ) {
          this.encuestaService
            .registrarEncuestaIdiomas(this.idiomas)
            .subscribe();
        }
        if (
          this.cafeteria1.amabilidad != '' &&
          this.cafeteria1.atencion != '' &&
          this.cafeteria1.disponibilidad != '' &&
          this.cafeteria1.horario != ''
        ) {
          this.encuestaService
            .registrarEncuestaCafeteria1(this.cafeteria1)
            .subscribe();
        }
        if (
          this.cafeteria2.amabilidad != '' &&
          this.cafeteria2.atencion != '' &&
          this.cafeteria2.disponibilidad != '' &&
          this.cafeteria2.horario != ''
        ) {
          this.encuestaService
            .registrarEncuestaCafeteria2(this.cafeteria2)
            .subscribe();
        }
        if (
          this.cajas.amabilidad != '' &&
          this.cajas.atencion != '' &&
          this.cajas.disponibilidad != '' &&
          this.cajas.horario != ''
        ) {
          this.encuestaService
            .registrarEncuestaCajas(this.cajas)
            .subscribe();
        }
        if (
          this.coordinadorDeCarreras.amabilidad != '' &&
          this.coordinadorDeCarreras.atencion != '' &&
          this.coordinadorDeCarreras.disponibilidad != '' &&
          this.coordinadorDeCarreras.horario != ''
        ) {
          this.encuestaService
            .registrarEncuestaCoordinadorDeCarreras(this.coordinadorDeCarreras)
            .subscribe();
        }
        if (
          this.becas.amabilidad != '' &&
          this.becas.atencion != '' &&
          this.becas.disponibilidad != '' &&
          this.becas.horario != ''
        ) {
          this.encuestaService
            .registrarEncuestaBecas(this.becas)
            .subscribe();
        }
        if (
          this.centroDeCopiado.amabilidad != '' &&
          this.centroDeCopiado.atencion != '' &&
          this.centroDeCopiado.disponibilidad != '' &&
          this.centroDeCopiado.horario != ''
        ) {
          this.encuestaService
            .registrarEncuestaCentroDeCopiado(this.centroDeCopiado)
            .subscribe();
        }
        if (
          this.psicologico.amabilidad != '' &&
          this.psicologico.atencion != '' &&
          this.psicologico.disponibilidad != '' &&
          this.psicologico.horario != ''
        ) {
          this.encuestaService
            .registrarEncuestaPsicologico(this.psicologico)
            .subscribe();
        }
        if (
          this.medico.amabilidad != '' &&
          this.medico.atencion != '' &&
          this.medico.disponibilidad != '' &&
          this.medico.horario != ''
        ) {
          this.encuestaService
            .registrarEncuestaMedico(this.medico)
            .subscribe();
        }
        if (
          this.asesoriasAcademicas.amabilidad != '' &&
          this.asesoriasAcademicas.atencion != '' &&
          this.asesoriasAcademicas.disponibilidad != '' &&
          this.asesoriasAcademicas.horario != ''
        ) {
          this.encuestaService
            .registrarEncuestaAsesorias(this.asesoriasAcademicas)
            .subscribe();
        }
        this.modal.show();
      },
      err =>{
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo salió mal!',
          confirmButtonColor: '#57060c'
        })
      });
    } catch (error) {

    }
  }
  inicio() {
    this.router.navigate(['inicio']);
    this.servicioSocial = {
      idAlumno: '',
      horario: '',
      disponibilidad: '',
      atencion: '',
      amabilidad: '',
      comentarios: '',
    };
    this.clubes = {
      idAlumno: '',
      horario: '',
      disponibilidad: '',
      atencion: '',
      amabilidad: '',
      comentarios: '',
    };
    this.biblioteca = {
      idAlumno: '',
      horario: '',
      disponibilidad: '',
      atencion: '',
      amabilidad: '',
      comentarios: '',
    };
    this.centroComputo = {
      idAlumno: '',
      horario: '',
      disponibilidad: '',
      atencion: '',
      amabilidad: '',
      comentarios: '',
    };
    this.controlEscolar = {
      idAlumno: '',
      horario: '',
      disponibilidad: '',
      atencion: '',
      amabilidad: '',
      comentarios: '',
    };
    this.tutorias = {
      idAlumno: '',
      horario: '',
      disponibilidad: '',
      atencion: '',
      amabilidad: '',
      comentarios: '',
    };
    this.residencias = {
      idAlumno: '',
      horario: '',
      disponibilidad: '',
      atencion: '',
      amabilidad: '',
      comentarios: '',
    };
    this.idiomas = {
      idAlumno: '',
      horario: '',
      disponibilidad: '',
      atencion: '',
      amabilidad: '',
      comentarios: '',
    };
    this.cafeteria1 = {
      idAlumno: '',
      horario: '',
      disponibilidad: '',
      atencion: '',
      amabilidad: '',
      comentarios: '',
    };
    this.cafeteria2 = {
      idAlumno: '',
      horario: '',
      disponibilidad: '',
      atencion: '',
      amabilidad: '',
      comentarios: '',
    };
    this.cajas = {
      idAlumno: '',
      horario: '',
      disponibilidad: '',
      atencion: '',
      amabilidad: '',
      comentarios: '',
    };
    this.coordinadorDeCarreras = {
      idAlumno: '',
      horario: '',
      disponibilidad: '',
      atencion: '',
      amabilidad: '',
      comentarios: '',
    };
    this.becas = {
      idAlumno: '',
      horario: '',
      disponibilidad: '',
      atencion: '',
      amabilidad: '',
      comentarios: '',
    };
    this.centroDeCopiado = {
      idAlumno: '',
      horario: '',
      disponibilidad: '',
      atencion: '',
      amabilidad: '',
      comentarios: '',
    };
    this.psicologico = {
      idAlumno: '',
      horario: '',
      disponibilidad: '',
      atencion: '',
      amabilidad: '',
      comentarios: '',
    };
    this.medico = {
      idAlumno: '',
      horario: '',
      disponibilidad: '',
      atencion: '',
      amabilidad: '',
      comentarios: '',
    };
    this.asesoriasAcademicas = {
      idAlumno: '',
      horario: '',
      disponibilidad: '',
      atencion: '',
      amabilidad: '',
      comentarios: ''
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
