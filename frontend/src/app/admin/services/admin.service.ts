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
}