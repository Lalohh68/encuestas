import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-clubes-comentarios',
  templateUrl: './clubes-comentarios.component.html',
  
  styleUrls: ['../../servicios/styles/admin.component.scss']
})
export class ClubesComentariosComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;
  comentarios: any = [];
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.dtOptions = {
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json',
      },
      ordering: false,
      info: true,
      searching: false,
      responsive: true,
      scrollX: true,
      paging: true,
      pagingType: 'full_numbers',
      processing: true,
      dom: 'lBfrtip',
      buttons: [
        {
          extend: 'excel',
          title: 'Comentarios_Clubes',
          text: '',
          className: 'mx-3 fa-solid fa-file-excel text-white bg-success',
          exportOptions: {
            columns: ':visible',
          },
        },
      ],
    };
    this.getComentarios();
  }

  getComentarios() {
    this.adminService.comentariosClubes().subscribe((data) => {
      this.comentarios = data;
      this.rerender();
    });
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