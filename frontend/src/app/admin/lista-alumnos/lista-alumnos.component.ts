
import { Subject } from 'rxjs';
import { AdminService } from '../services/admin.service';
import { DataTableDirective } from 'angular-datatables';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { from } from 'rxjs';

declare const $: any;
  


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['../servicios/styles/admin.component.scss']
})
export class ListaAlumnosComponent implements AfterViewInit, OnDestroy, OnInit  {
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private adminService: AdminService) { }
  alumnos:any=[]
  
  ngOnInit():void {
 
      this.adminService.consultarAlumnos().subscribe(
          data =>{this.alumnos=data,this.dtTrigger.next(void 0)}
      );
  
      setTimeout(()=>{   
        $('#datatables').DataTable( {
          language: {
            url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json',
        },
        ordering: true,
        info: true,
        searching:true,
        responsive:true,
        scrollX: true,
          paging: true,
          pagingType: 'full_numbers',
          processing: true,
          dom: 'lBfrtip',
          buttons: [
            {extend: 'excel',
              text: '',
              
              className:'mx-3 fa-solid fa-file-excel text-white bg-success',
              exportOptions: {
                columns: ':visible'}}
              
              
            ]
      } );
      }, 500); 
  
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next(void 0);
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next(void 0);
    });
  }
  
}