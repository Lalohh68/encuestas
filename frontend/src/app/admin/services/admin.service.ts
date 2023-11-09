import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";



@Injectable({
    providedIn: 'root'
})

export class AdminService{


    constructor(private http: HttpClient) {

    }
    API_URI = 'http://localhost:3000/api/admin/';
    

    dataClubes() {
        return this.http.get(`${this.API_URI}clubes`);
      }
      dataControlEscolar() {
        return this.http.get(`${this.API_URI}control_escolar`);
      }
      dataTutorias() {
        return this.http.get(`${this.API_URI}tutorias`);
      }
      dataBiblioteca() {
        return this.http.get(`${this.API_URI}biblioteca`);
      }
      dataCentroDeComputo() {
        return this.http.get(`${this.API_URI}centro_de_computo`);
      }
      dataServicioSocial() {
        return this.http.get(`${this.API_URI}servicio_social`);
      }
      dataResidencias() {
        return this.http.get(`${this.API_URI}residencias`);
      }
      dataIdiomas() {
        return this.http.get(`${this.API_URI}idiomas`);
      }
      dataCafeteria1() {
        return this.http.get(`${this.API_URI}cafeteria_1`);
      }
      dataCafeteria2() {
        return this.http.get(`${this.API_URI}cafeteria_2`);
      }
      dataCajas() {
        return this.http.get(`${this.API_URI}cajas`);
      }
      dataCoordinadorDeCarreras() {
        return this.http.get(`${this.API_URI}coordinador_de_carreras`);
      }
      dataBecas() {
        return this.http.get(`${this.API_URI}becas`);
      }
      dataCentroDeCopiado() {
        return this.http.get(`${this.API_URI}centro_de_copiado`);
      }
      dataPsicologico() {
        return this.http.get(`${this.API_URI}psicologico`);
      }
      dataMedico() {
        return this.http.get(`${this.API_URI}medico`);
      }
      dataAsesoriasAcademicas() {
        return this.http.get(`${this.API_URI}asesorias_academicas`);
      }
      consultarAlumnos() {
        return this.http.get(`${this.API_URI}alumnos`);
      }
      consultarTotalAlumnos() {
        return this.http.get(`${this.API_URI}total`);
      }
      
      comentariosClubes() {
        return this.http.get(`${this.API_URI}clubes/comentarios`);
      }
      comentariosControlEscolar() {
        return this.http.get(`${this.API_URI}control_escolar/comentarios`);
      }
      comentariosTutorias() {
        return this.http.get(`${this.API_URI}tutorias/comentarios`);
      }
      comentariosBiblioteca() {
        return this.http.get(`${this.API_URI}biblioteca/comentarios`);
      }
      comentariosCentroDeComputo() {
        return this.http.get(`${this.API_URI}centro_de_computo/comentarios`);
      }
      comentariosServicioSocial() {
        return this.http.get(`${this.API_URI}servicio_social/comentarios`);
      }
      comentariosResidencias() {
        return this.http.get(`${this.API_URI}residencias/comentarios`);
      }
      comentariosIdiomas() {
        return this.http.get(`${this.API_URI}idiomas/comentarios`);
      }
      comentariosCafeteria1() {
        return this.http.get(`${this.API_URI}cafeteria_1/comentarios`);
      }
      comentariosCafeteria2() {
        return this.http.get(`${this.API_URI}cafeteria_2/comentarios`);
      }
      comentariosCajas() {
        return this.http.get(`${this.API_URI}cajas/comentarios`);
      }
      comentariosCoordinadorDeCarreras() {
        return this.http.get(`${this.API_URI}coordinador_de_carreras/comentarios`);
      }
      comentariosBecas() {
        return this.http.get(`${this.API_URI}becas/comentarios`);
      }
      comentariosCentroDeCopiado() {
        return this.http.get(`${this.API_URI}centro_de_copiado/comentarios`);
      }
      comentariosPsicologico() {
        return this.http.get(`${this.API_URI}psicologico/comentarios`);
      }
      comentariosMedico() {
        return this.http.get(`${this.API_URI}medico/comentarios`);
      }
      comentariosAsesoriasAcademicas() {
        return this.http.get(`${this.API_URI}asesorias_academicas/comentarios`);
      }
}