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
}