import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../servicios/styles/admin.component.scss']
})
export class DashboardComponent implements OnInit {
datos:any=[]
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.consultarTotalAlumnos().subscribe(
      data =>{this.datos=data
      },
      res=>{
    
      }
    );
   
  }

}
