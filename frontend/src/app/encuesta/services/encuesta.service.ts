import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {alumno,respuestaAlumno,respuestaRegistro}from '../models/encuestas.interface' 

@Injectable({
  providedIn: 'root'
})
export class EncuestasService {

  constructor(private http: HttpClient) {

  }
  API_URI = 'http://localhost:3000/api/encuestas/';

  alumno(alumno: alumno): Observable<respuestaAlumno> {
    return this.http.put(`${this.API_URI}folio`, alumno);
}
registrarAlumno(alumno: alumno) {
  return this.http.put(`${this.API_URI}alumno`, alumno);
}
}