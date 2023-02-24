import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cafeteria1',
  templateUrl: './cafeteria1.component.html',
  styleUrls: ['../estilos-servicios.component.css']
})
export class Cafeteria1Component implements OnInit {
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
      this.router.navigate(['inicio/cafeteria_2']);
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
