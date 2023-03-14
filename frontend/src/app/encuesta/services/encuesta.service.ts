import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import {alumno,respuestaAlumno,respuestaRegistro}from '../models/encuestas.interface' 
export interface encuesta {
  idAlumno:"",
horario: "",
disponibilidad: "",
atencion:"",
amabilidad:"",
comentarios:""
}

const clubes:encuesta ={
  idAlumno:"",
  horario: "",
  disponibilidad: "",
  atencion:"",
  amabilidad:"",
  comentarios:""
  }
  const becas:encuesta ={
    idAlumno:"",
    horario: "",
    disponibilidad: "",
    atencion:"",
    amabilidad:"",
    comentarios:""
    }
  const asesorias:encuesta ={
  idAlumno:"",
  horario: "",
  disponibilidad: "",
  atencion:"",
  amabilidad:"",
  comentarios:""
  }
  const biblioteca:encuesta ={
    idAlumno:"",
    horario: "",
    disponibilidad: "",
    atencion:"",
    amabilidad:"",
    comentarios:""
    }
  const cafeteria1:encuesta ={
  idAlumno:"",
  horario: "",
  disponibilidad: "",
  atencion:"",
  amabilidad:"",
  comentarios:""
  }
  const cafeteria2:encuesta ={
    idAlumno:"",
    horario: "",
    disponibilidad: "",
    atencion:"",
    amabilidad:"",
    comentarios:""
    }

  const cajas:encuesta ={
      idAlumno:"",
      horario: "",
      disponibilidad: "",
      atencion:"",
      amabilidad:"",
      comentarios:""
      }
    const centroComputo:encuesta ={
  idAlumno:"",
  horario: "",
  disponibilidad: "",
  atencion:"",
  amabilidad:"",
  comentarios:""
  }
  const centroCopiado:encuesta ={
  idAlumno:"",
  horario: "",
  disponibilidad: "",
  atencion:"",
  amabilidad:"",
  comentarios:""
  }
  const controlEscolar:encuesta ={
  idAlumno:"",
  horario: "",
  disponibilidad: "",
  atencion:"",
  amabilidad:"",
  comentarios:""
  }
  const coordinadorCarreras:encuesta ={
  idAlumno:"",
  horario: "",
  disponibilidad: "",
  atencion:"",
  amabilidad:"",
  comentarios:""
  }
  const idiomas:encuesta ={
    idAlumno:"",
    horario: "",
    disponibilidad: "",
    atencion:"",
    amabilidad:"",
    comentarios:""
    }
  const medico:encuesta ={
  idAlumno:"",
  horario: "",
  disponibilidad: "",
  atencion:"",
  amabilidad:"",
  comentarios:""
  }
  const psicologico:encuesta ={
    idAlumno:"",
    horario: "",
    disponibilidad: "",
    atencion:"",
    amabilidad:"",
    comentarios:""
    }
    const residencias:encuesta ={
      idAlumno:"",
      horario: "",
      disponibilidad: "",
      atencion:"",
      amabilidad:"",
      comentarios:""
      }
  const servicioSocial:encuesta ={
  idAlumno:"",
  horario: "",
  disponibilidad: "",
  atencion:"",
  amabilidad:"",
  comentarios:""
  }
  const tutorias:encuesta ={
    idAlumno:"",
    horario: "",
    disponibilidad: "",
    atencion:"",
    amabilidad:"",
    comentarios:""
    }

@Injectable({
  providedIn: 'root'
})



export class EncuestasService {
private encuestaAsesorias$ = new BehaviorSubject<encuesta>(asesorias)
private encuestaBecas$ = new BehaviorSubject<encuesta>(becas)
private encuestaBiblioteca$ = new BehaviorSubject<encuesta>(biblioteca)
private encuestaCafeteria1$ = new BehaviorSubject<encuesta>(cafeteria1)
private encuestaCafeteria2$ = new BehaviorSubject<encuesta>(cafeteria2)
private encuestaCajas$ = new BehaviorSubject<encuesta>(cajas)
private encuestaCentroComputo$ = new BehaviorSubject<encuesta>(centroComputo)
private encuestaCentroCopiado$ = new BehaviorSubject<encuesta>(centroCopiado)
private encuestaClubes$ = new BehaviorSubject<encuesta>(clubes)
private encuestaControlEscolar$ = new BehaviorSubject<encuesta>(controlEscolar)
private encuestaCoordinadorCarreras$ = new BehaviorSubject<encuesta>(coordinadorCarreras)
private encuestaIdiomas$ = new BehaviorSubject<encuesta>(idiomas)
private encuestaMedico$ = new BehaviorSubject<encuesta>(medico)
private encuestaPsocologico$ = new BehaviorSubject<encuesta>(psicologico)
private encuestaResidencias$ = new BehaviorSubject<encuesta>(residencias)
private encuestaServicioSocial$ = new BehaviorSubject<encuesta>(servicioSocial)
private encuestaTutorias$ = new BehaviorSubject<encuesta>(tutorias)
  constructor(private http: HttpClient) {

  }
  API_URI = 'http://localhost:3000/api/encuestas/';

  alumno(alumno: alumno): Observable<respuestaAlumno> {
    return this.http.put(`${this.API_URI}folio`, alumno);
}
registrarAlumno(alumno: alumno): Observable<respuestaAlumno> {
  return this.http.put(`${this.API_URI}alumno`, alumno);
}
// becas
registrarEncuestaBecas(becas: encuesta) {
  return this.http.put(`${this.API_URI}becas`, becas);
}
get getEncuestaBecas$(): Observable<encuesta>{
  return this.encuestaBecas$.asObservable();
}
setEncuestaBecas(becas: encuesta):void{
  this.encuestaBecas$.next(becas);
}
//asesorias
registrarEncuestaAsesorias(asesorias: encuesta) {
  return this.http.put(`${this.API_URI}asesorias`, asesorias);
}
get getEncuestaAsesorias$(): Observable<encuesta>{
  return this.encuestaAsesorias$.asObservable();
}
setEncuestaAsesorias(asesorias: encuesta):void{
  this.encuestaAsesorias$.next(asesorias);
}

//biblioteca
registrarEncuestaBiblioteca(biblioteca: encuesta) {
  return this.http.put(`${this.API_URI}biblioteca`, biblioteca);
}
get getEncuestaBiblioteca$(): Observable<encuesta>{
  return this.encuestaBiblioteca$.asObservable();
}
setEncuestaBiblioteca(biblioteca: encuesta):void{
  this.encuestaBiblioteca$.next(biblioteca);
}

//cafeteria1
registrarEncuestaCafeteria1(cafeteria1: encuesta) {
  return this.http.put(`${this.API_URI}cafeteria1`, cafeteria1);
}
get getEncuestaCafeteria1$(): Observable<encuesta>{
  return this.encuestaCafeteria1$.asObservable();
}
setEncuestaCafeteria1(cafeteria1: encuesta):void{
  this.encuestaCafeteria1$.next(cafeteria1);
}

//cafeteria2
registrarEncuestaCafeteria2(cafeteria2: encuesta) {
  return this.http.put(`${this.API_URI}cafeteria2`, cafeteria2);
}
get getEncuestaCafeteria2$(): Observable<encuesta>{
  return this.encuestaCafeteria2$.asObservable();
}
setEncuestaCafeteria2(cafeteria2: encuesta):void{
  this.encuestaCafeteria2$.next(cafeteria2);
}
//cajas
registrarEncuestaCajas(cajas: encuesta) {
  return this.http.put(`${this.API_URI}cajas`, cajas);
}
get getEncuestaCajas$(): Observable<encuesta>{
  return this.encuestaCajas$.asObservable();
}
setEncuestaCajas(cajas: encuesta):void{
  this.encuestaCajas$.next(cajas);
}

//centroComputo
registrarEncuestaCentroDeComputo(centroComputo: encuesta) {
  return this.http.put(`${this.API_URI}centroComputo`, centroComputo);
}
get getEncuestaCentroComputo$(): Observable<encuesta>{
  return this.encuestaCentroComputo$.asObservable();
}
setEncuestaCentroComputo(centroComputo: encuesta):void{
  this.encuestaCentroComputo$.next(centroComputo);
}

//centroCopiado
registrarEncuestaCentroDeCopiado(centroCopiado: encuesta) {
  return this.http.put(`${this.API_URI}centroCopiado`, centroCopiado);
}
get getEncuestaCentroCopiado$(): Observable<encuesta>{
  return this.encuestaCentroCopiado$.asObservable();
}
setEncuestaCentroCopiado(centroCopiado: encuesta):void{
  this.encuestaCentroCopiado$.next(centroCopiado);
}

//clubes
registrarEncuestaClubes(clubes: encuesta) {
  return this.http.put(`${this.API_URI}clubes`, clubes);
}
get getEncuestaClubes$(): Observable<encuesta>{
  return this.encuestaClubes$.asObservable();
}
setEncuestaClubes(clubes: encuesta):void{
  this.encuestaClubes$.next(clubes);
}

//controlEscolar
registrarEncuestaControlEscolar(controlEscolar: encuesta) {
  return this.http.put(`${this.API_URI}controlEscolar`, controlEscolar);
}
get getEncuestaControlEscolar$(): Observable<encuesta>{
  return this.encuestaControlEscolar$.asObservable();
}
setEncuestaControlEscolar(controlEscolar: encuesta):void{
  this.encuestaControlEscolar$.next(controlEscolar);
}

//coordinador
registrarEncuestaCoordinadorDeCarreras(coordinadorCarreras: encuesta) {
  return this.http.put(`${this.API_URI}coordinadorCarreras`, coordinadorCarreras);
}
get getEncuestaCoordinadorCarreras$(): Observable<encuesta>{
  return this.encuestaCoordinadorCarreras$.asObservable();
}
setEncuestaCoordinadorCarreras(coordinadorCarreras: encuesta):void{
  this.encuestaCoordinadorCarreras$.next(coordinadorCarreras);
}

//idiomas
registrarEncuestaIdiomas(idiomas: encuesta) {
  return this.http.put(`${this.API_URI}idiomas`, idiomas);
}
get getEncuestaIdiomas$(): Observable<encuesta>{
  return this.encuestaIdiomas$.asObservable();
}
setEncuestaIdiomas(idiomas: encuesta):void{
  this.encuestaIdiomas$.next(idiomas);
}

//medico
registrarEncuestaMedico(medico: encuesta) {
  return this.http.put(`${this.API_URI}medico`, medico);
}
get getEncuestaMedico$(): Observable<encuesta>{
  return this.encuestaMedico$.asObservable();
}
setEncuestaMedico(medico: encuesta):void{
  this.encuestaMedico$.next(medico);
}

//psicologico
registrarEncuestaPsicologico(psicologico: encuesta) {
  return this.http.put(`${this.API_URI}psicologico`, psicologico);
}
get getEncuestaPsicologico$(): Observable<encuesta>{
  return this.encuestaPsocologico$.asObservable();
}
setEncuestaPsicologico(psicologico: encuesta):void{
  this.encuestaPsocologico$.next(psicologico);
}

//residencias
registrarEncuestaResidencias(residencias: encuesta) {
  return this.http.put(`${this.API_URI}residencias`, residencias);
}
get getEncuestaResidencias$(): Observable<encuesta>{
  return this.encuestaResidencias$.asObservable();
}
setEncuestaResidencias(residencias: encuesta):void{
  this.encuestaResidencias$.next(residencias);
}

//ServicioSocial
registrarEncuestaServicioSocial(servicioSocial: encuesta) {
  return this.http.put(`${this.API_URI}servicioSocial`, servicioSocial);
}
get getEncuestaServicioSocial$(): Observable<encuesta>{
  return this.encuestaServicioSocial$.asObservable();
}
setEncuestaServicioSocial(servicioSocial: encuesta):void{
  this.encuestaServicioSocial$.next(servicioSocial);
}

//tutorias
registrarEncuestaTutorias(tutorias: encuesta) {
  return this.http.put(`${this.API_URI}tutorias`, tutorias);
}
get getEncuestaTutorias$(): Observable<encuesta>{
  return this.encuestaTutorias$.asObservable();
}
setEncuestaTutorias(tutorias: encuesta):void{
  this.encuestaTutorias$.next(tutorias);
}

dataClubes() {
  return this.http.get(`http://localhost:3000/api/admin/clubes`);
}
}
