import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicio-social',
  templateUrl: './servicio-social.component.html',
  styleUrls: ['../estilos-servicios.component.css']
})
export class ServicioSocialComponent implements OnInit {
  preguntasCompletas: boolean = false;
  extraEscolares = {
    horario: null,
  };
  disable: boolean = false;
  isEnabled: any;
  form;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.form = formBuilder.group({
      horario: ['', Validators.required],
      disponibilidad: ['', Validators.required],
      atencion: ['', Validators.required],
      amabilidad: ['', Validators.required],
    });
  }

  servicioUtilizado() {
    this.isEnabled = true;
  }
  servicioNoUtilizado() {
    this.isEnabled = false;
  }

  siguiente() {
    if (this.form.valid || this.isEnabled == false) {
      this.router.navigate(['inicio/residencias']);
    } else {
      this.openSnackBar();
    }
  }

  ngOnInit(): void {}
  openSnackBar() {
    this._snackBar.open('Responde todas las preguntas', undefined, {
      duration: 3000,
    });
  }
}
