import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.scss']
})
export class InformeComponent implements OnInit {
  dtTrigger: Subject<any> = new Subject<any>();

  clubes:any=[]
  dataClubes:any={
    total: 0,
    satisfechoTotal:0,
  noSatisfechoTotal:0,
  satisfechoHorario:0,
  noSatisfechoHorario:0,
  satisfechoDisponibilidad:0,
  noSatisfechoDisponibilidad:0,
  satisfechoAtencion:0,
  noSatisfechoAtencion:0,
  satisfechoAmabilidad:0,
  noSatisfechoAmabilidad:0
  }
  
  controlEscolar:any=[]
  dataControlEscolar:any={
    total: 0,
    satisfechoTotal:0,
  noSatisfechoTotal:0,
  satisfechoHorario:0,
  noSatisfechoHorario:0,
  satisfechoDisponibilidad:0,
  noSatisfechoDisponibilidad:0,
  satisfechoAtencion:0,
  noSatisfechoAtencion:0,
  satisfechoAmabilidad:0,
  noSatisfechoAmabilidad:0
  }

  tutorias:any=[]
  dataTutorias:any={
    total: 0,
    satisfechoTotal:0,
  noSatisfechoTotal:0,
  satisfechoHorario:0,
  noSatisfechoHorario:0,
  satisfechoDisponibilidad:0,
  noSatisfechoDisponibilidad:0,
  satisfechoAtencion:0,
  noSatisfechoAtencion:0,
  satisfechoAmabilidad:0,
  noSatisfechoAmabilidad:0
  }

  biblioteca:any=[]
  dataBiblioteca:any={
    total: 0,
    satisfechoTotal:0,
  noSatisfechoTotal:0,
  satisfechoHorario:0,
  noSatisfechoHorario:0,
  satisfechoDisponibilidad:0,
  noSatisfechoDisponibilidad:0,
  satisfechoAtencion:0,
  noSatisfechoAtencion:0,
  satisfechoAmabilidad:0,
  noSatisfechoAmabilidad:0
  }

  centroDeComputo:any=[]
  dataCentroDeComputo:any={
    total: 0,
    satisfechoTotal:0,
  noSatisfechoTotal:0,
  satisfechoHorario:0,
  noSatisfechoHorario:0,
  satisfechoDisponibilidad:0,
  noSatisfechoDisponibilidad:0,
  satisfechoAtencion:0,
  noSatisfechoAtencion:0,
  satisfechoAmabilidad:0,
  noSatisfechoAmabilidad:0
  }

  servicioSocial:any=[]
  dataServicioSocial:any={
    total: 0,
    satisfechoTotal:0,
  noSatisfechoTotal:0,
  satisfechoHorario:0,
  noSatisfechoHorario:0,
  satisfechoDisponibilidad:0,
  noSatisfechoDisponibilidad:0,
  satisfechoAtencion:0,
  noSatisfechoAtencion:0,
  satisfechoAmabilidad:0,
  noSatisfechoAmabilidad:0
  }
    residencias:any=[]
  dataResidencias:any={
    total: 0,
    satisfechoTotal:0,
  noSatisfechoTotal:0,
  satisfechoHorario:0,
  noSatisfechoHorario:0,
  satisfechoDisponibilidad:0,
  noSatisfechoDisponibilidad:0,
  satisfechoAtencion:0,
  noSatisfechoAtencion:0,
  satisfechoAmabilidad:0,
  noSatisfechoAmabilidad:0
  }
    idiomas:any=[]
  dataIdiomas:any={
    total: 0,
    satisfechoTotal:0,
  noSatisfechoTotal:0,
  satisfechoHorario:0,
  noSatisfechoHorario:0,
  satisfechoDisponibilidad:0,
  noSatisfechoDisponibilidad:0,
  satisfechoAtencion:0,
  noSatisfechoAtencion:0,
  satisfechoAmabilidad:0,
  noSatisfechoAmabilidad:0
  }

    cafeteria1:any=[]
  dataCafeteria1:any={
    total: 0,
    satisfechoTotal:0,
  noSatisfechoTotal:0,
  satisfechoHorario:0,
  noSatisfechoHorario:0,
  satisfechoDisponibilidad:0,
  noSatisfechoDisponibilidad:0,
  satisfechoAtencion:0,
  noSatisfechoAtencion:0,
  satisfechoAmabilidad:0,
  noSatisfechoAmabilidad:0
  }

    cafeteria2:any=[]
  dataCafeteria2:any={
    total: 0,
    satisfechoTotal:0,
  noSatisfechoTotal:0,
  satisfechoHorario:0,
  noSatisfechoHorario:0,
  satisfechoDisponibilidad:0,
  noSatisfechoDisponibilidad:0,
  satisfechoAtencion:0,
  noSatisfechoAtencion:0,
  satisfechoAmabilidad:0,
  noSatisfechoAmabilidad:0
  }

    caja:any=[]
  dataCaja:any={
    total: 0,
    satisfechoTotal:0,
  noSatisfechoTotal:0,
  satisfechoHorario:0,
  noSatisfechoHorario:0,
  satisfechoDisponibilidad:0,
  noSatisfechoDisponibilidad:0,
  satisfechoAtencion:0,
  noSatisfechoAtencion:0,
  satisfechoAmabilidad:0,
  noSatisfechoAmabilidad:0
  }
  
    becas:any=[]
  dataBecas:any={
    total: 0,
    satisfechoTotal:0,
  noSatisfechoTotal:0,
  satisfechoHorario:0,
  noSatisfechoHorario:0,
  satisfechoDisponibilidad:0,
  noSatisfechoDisponibilidad:0,
  satisfechoAtencion:0,
  noSatisfechoAtencion:0,
  satisfechoAmabilidad:0,
  noSatisfechoAmabilidad:0
  }

  coordinadorDeCarreras:any=[]
  dataCoordinadorDeCarreras:any={
    total: 0,
    satisfechoTotal:0,
  noSatisfechoTotal:0,
  satisfechoHorario:0,
  noSatisfechoHorario:0,
  satisfechoDisponibilidad:0,
  noSatisfechoDisponibilidad:0,
  satisfechoAtencion:0,
  noSatisfechoAtencion:0,
  satisfechoAmabilidad:0,
  noSatisfechoAmabilidad:0
  }

  centroDeCopiado:any=[]
  dataCentroDeCopiado:any={
    total: 0,
    satisfechoTotal:0,
  noSatisfechoTotal:0,
  satisfechoHorario:0,
  noSatisfechoHorario:0,
  satisfechoDisponibilidad:0,
  noSatisfechoDisponibilidad:0,
  satisfechoAtencion:0,
  noSatisfechoAtencion:0,
  satisfechoAmabilidad:0,
  noSatisfechoAmabilidad:0
  }

  medico:any=[]
  dataMedico:any={
    total: 0,
    satisfechoTotal:0,
  noSatisfechoTotal:0,
  satisfechoHorario:0,
  noSatisfechoHorario:0,
  satisfechoDisponibilidad:0,
  noSatisfechoDisponibilidad:0,
  satisfechoAtencion:0,
  noSatisfechoAtencion:0,
  satisfechoAmabilidad:0,
  noSatisfechoAmabilidad:0
  }
  psicologico:any=[]
  dataPsicologico:any={
    total: 0,
    satisfechoTotal:0,
  noSatisfechoTotal:0,
  satisfechoHorario:0,
  noSatisfechoHorario:0,
  satisfechoDisponibilidad:0,
  noSatisfechoDisponibilidad:0,
  satisfechoAtencion:0,
  noSatisfechoAtencion:0,
  satisfechoAmabilidad:0,
  noSatisfechoAmabilidad:0
  }

  asesoriasAcademicas:any=[]
  dataAsesoriasAcademicas:any={
    total: 0,
    satisfechoTotal:0,
  noSatisfechoTotal:0,
  satisfechoHorario:0,
  noSatisfechoHorario:0,
  satisfechoDisponibilidad:0,
  noSatisfechoDisponibilidad:0,
  satisfechoAtencion:0,
  noSatisfechoAtencion:0,
  satisfechoAmabilidad:0,
  noSatisfechoAmabilidad:0
  }

  
  dtOptions: any = {};
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    // // this.dtOptions = {
    // //   paging: false,
    // //   ordering: false,
    // //   info: false,
    // //   searching:false,
    // //   responsive:true,
    // //   scrollX: true,
    // //   dom: 'Bfrtip',
    // //   buttons: [
        
    // //     'colvis',
    // //     'copy',
    // //     'print',
    // //     'excel'
    // //   ]
      
    // // };  
    this.adminService.dataClubes().subscribe(
    data =>{this.clubes=data,this.dtTrigger,
      this.dataClubes.total= ((this.clubes[0].total)),
      this.dataClubes.satisfechoHorario= ((this.clubes[0].horario_satisfechos / this.clubes[0].total)*100),
      this.dataClubes.noSatisfechoHorario= (this.clubes[0].horario_no_satisfechos / this.clubes[0].total)*100;
      this.dataClubes.satisfechoDisponibilidad= (this.clubes[0].disponibilidad_satisfechos / this.clubes[0].total)*100,
      this.dataClubes.noSatisfechoDisponibilidad= (this.clubes[0].disponibilidad_no_satisfechos / this.clubes[0].total)*100; 
      this.dataClubes.satisfechoAtencion= (this.clubes[0].atencion_satisfechos / this.clubes[0].total)*100,
      this.dataClubes.noSatisfechoAtencion= (this.clubes[0].atencion_no_satisfechos / this.clubes[0].total)*100;  
      this.dataClubes.satisfechoAmabilidad= (this.clubes[0].amabilidad_satisfechos / this.clubes[0].total)*100,
      this.dataClubes.noSatisfechoAmabilidad= (this.clubes[0].amabilidad_no_satisfechos / this.clubes[0].total)*100; 
      this.dataClubes.satisfechoTotal=(this.dataClubes.satisfechoHorario+this.dataClubes.satisfechoAmabilidad+this.dataClubes.satisfechoAtencion+this.dataClubes.satisfechoDisponibilidad)*.25
      this.dataClubes.noSatisfechoTotal=(this.dataClubes.noSatisfechoHorario+this.dataClubes.noSatisfechoAmabilidad+this.dataClubes.noSatisfechoAtencion+this.dataClubes.noSatisfechoDisponibilidad)*.25
    },
  );

  this.adminService.dataControlEscolar().subscribe(
    data =>{this.controlEscolar=data,this.dtTrigger,
      this.dataControlEscolar.total= ((this.controlEscolar[0].total)),
      this.dataControlEscolar.satisfechoHorario= ((this.controlEscolar[0].horario_satisfechos / this.controlEscolar[0].total)*100),
      this.dataControlEscolar.noSatisfechoHorario= (this.controlEscolar[0].horario_no_satisfechos / this.controlEscolar[0].total)*100;
      this.dataControlEscolar.satisfechoDisponibilidad= (this.controlEscolar[0].disponibilidad_satisfechos / this.controlEscolar[0].total)*100,
      this.dataControlEscolar.noSatisfechoDisponibilidad= (this.controlEscolar[0].disponibilidad_no_satisfechos / this.controlEscolar[0].total)*100; 
      this.dataControlEscolar.satisfechoAtencion= (this.controlEscolar[0].atencion_satisfechos / this.controlEscolar[0].total)*100,
      this.dataControlEscolar.noSatisfechoAtencion= (this.controlEscolar[0].atencion_no_satisfechos / this.controlEscolar[0].total)*100;  
      this.dataControlEscolar.satisfechoAmabilidad= (this.controlEscolar[0].amabilidad_satisfechos / this.controlEscolar[0].total)*100,
      this.dataControlEscolar.noSatisfechoAmabilidad= (this.controlEscolar[0].amabilidad_no_satisfechos / this.controlEscolar[0].total)*100; 
      this.dataControlEscolar.satisfechoTotal=(this.dataControlEscolar.satisfechoHorario+this.dataControlEscolar.satisfechoAmabilidad+this.dataControlEscolar.satisfechoAtencion+this.dataControlEscolar.satisfechoDisponibilidad)*.25
      this.dataControlEscolar.noSatisfechoTotal=(this.dataControlEscolar.noSatisfechoHorario+this.dataControlEscolar.noSatisfechoAmabilidad+this.dataControlEscolar.noSatisfechoAtencion+this.dataControlEscolar.noSatisfechoDisponibilidad)*.25
    },
  );
  this.adminService.dataTutorias().subscribe(
    data =>{this.tutorias=data,this.dtTrigger,
      this.dataTutorias.total= ((this.tutorias[0].total)),
      this.dataTutorias.satisfechoHorario= ((this.tutorias[0].horario_satisfechos / this.tutorias[0].total)*100),
      this.dataTutorias.noSatisfechoHorario= (this.tutorias[0].horario_no_satisfechos / this.tutorias[0].total)*100;
      this.dataTutorias.satisfechoDisponibilidad= (this.tutorias[0].disponibilidad_satisfechos / this.tutorias[0].total)*100,
      this.dataTutorias.noSatisfechoDisponibilidad= (this.tutorias[0].disponibilidad_no_satisfechos / this.tutorias[0].total)*100; 
      this.dataTutorias.satisfechoAtencion= (this.tutorias[0].atencion_satisfechos / this.tutorias[0].total)*100,
      this.dataTutorias.noSatisfechoAtencion= (this.tutorias[0].atencion_no_satisfechos / this.tutorias[0].total)*100;  
      this.dataTutorias.satisfechoAmabilidad= (this.tutorias[0].amabilidad_satisfechos / this.tutorias[0].total)*100,
      this.dataTutorias.noSatisfechoAmabilidad= (this.tutorias[0].amabilidad_no_satisfechos / this.tutorias[0].total)*100; 
      this.dataTutorias.satisfechoTotal=(this.dataTutorias.satisfechoHorario+this.dataTutorias.satisfechoAmabilidad+this.dataTutorias.satisfechoAtencion+this.dataTutorias.satisfechoDisponibilidad)*.25
      this.dataTutorias.noSatisfechoTotal=(this.dataTutorias.noSatisfechoHorario+this.dataTutorias.noSatisfechoAmabilidad+this.dataTutorias.noSatisfechoAtencion+this.dataTutorias.noSatisfechoDisponibilidad)*.25
    },
  );

  this.adminService.dataBiblioteca().subscribe(
    data =>{this.biblioteca=data,this.dtTrigger,
      this.dataBiblioteca.total= ((this.biblioteca[0].total)),
      this.dataBiblioteca.satisfechoHorario= ((this.biblioteca[0].horario_satisfechos / this.biblioteca[0].total)*100),
      this.dataBiblioteca.noSatisfechoHorario= (this.biblioteca[0].horario_no_satisfechos / this.biblioteca[0].total)*100;
      this.dataBiblioteca.satisfechoDisponibilidad= (this.biblioteca[0].disponibilidad_satisfechos / this.biblioteca[0].total)*100,
      this.dataBiblioteca.noSatisfechoDisponibilidad= (this.biblioteca[0].disponibilidad_no_satisfechos / this.biblioteca[0].total)*100; 
      this.dataBiblioteca.satisfechoAtencion= (this.biblioteca[0].atencion_satisfechos / this.biblioteca[0].total)*100,
      this.dataBiblioteca.noSatisfechoAtencion= (this.biblioteca[0].atencion_no_satisfechos / this.biblioteca[0].total)*100;  
      this.dataBiblioteca.satisfechoAmabilidad= (this.biblioteca[0].amabilidad_satisfechos / this.biblioteca[0].total)*100,
      this.dataBiblioteca.noSatisfechoAmabilidad= (this.biblioteca[0].amabilidad_no_satisfechos / this.biblioteca[0].total)*100; 
      this.dataBiblioteca.satisfechoTotal=(this.dataBiblioteca.satisfechoHorario+this.dataBiblioteca.satisfechoAmabilidad+this.dataBiblioteca.satisfechoAtencion+this.dataBiblioteca.satisfechoDisponibilidad)*.25
      this.dataBiblioteca.noSatisfechoTotal=(this.dataBiblioteca.noSatisfechoHorario+this.dataBiblioteca.noSatisfechoAmabilidad+this.dataBiblioteca.noSatisfechoAtencion+this.dataBiblioteca.noSatisfechoDisponibilidad)*.25
    },
  );

  this.adminService.dataCentroDeComputo().subscribe(
    data =>{this.centroDeComputo=data,this.dtTrigger,
      this.dataCentroDeComputo.total= ((this.centroDeComputo[0].total)),
      this.dataCentroDeComputo.satisfechoHorario= ((this.centroDeComputo[0].horario_satisfechos / this.centroDeComputo[0].total)*100),
      this.dataCentroDeComputo.noSatisfechoHorario= (this.centroDeComputo[0].horario_no_satisfechos / this.centroDeComputo[0].total)*100;
      this.dataCentroDeComputo.satisfechoDisponibilidad= (this.centroDeComputo[0].disponibilidad_satisfechos / this.centroDeComputo[0].total)*100,
      this.dataCentroDeComputo.noSatisfechoDisponibilidad= (this.centroDeComputo[0].disponibilidad_no_satisfechos / this.centroDeComputo[0].total)*100; 
      this.dataCentroDeComputo.satisfechoAtencion= (this.centroDeComputo[0].atencion_satisfechos / this.centroDeComputo[0].total)*100,
      this.dataCentroDeComputo.noSatisfechoAtencion= (this.centroDeComputo[0].atencion_no_satisfechos / this.centroDeComputo[0].total)*100;  
      this.dataCentroDeComputo.satisfechoAmabilidad= (this.centroDeComputo[0].amabilidad_satisfechos / this.centroDeComputo[0].total)*100,
      this.dataCentroDeComputo.noSatisfechoAmabilidad= (this.centroDeComputo[0].amabilidad_no_satisfechos / this.centroDeComputo[0].total)*100; 
      this.dataCentroDeComputo.satisfechoTotal=(this.dataCentroDeComputo.satisfechoHorario+this.dataCentroDeComputo.satisfechoAmabilidad+this.dataCentroDeComputo.satisfechoAtencion+this.dataCentroDeComputo.satisfechoDisponibilidad)*.25
      this.dataCentroDeComputo.noSatisfechoTotal=(this.dataCentroDeComputo.noSatisfechoHorario+this.dataCentroDeComputo.noSatisfechoAmabilidad+this.dataCentroDeComputo.noSatisfechoAtencion+this.dataCentroDeComputo.noSatisfechoDisponibilidad)*.25
    },
  );

  this.adminService.dataServicioSocial().subscribe(
    data =>{this.servicioSocial=data,this.dtTrigger,
      this.dataServicioSocial.total= ((this.servicioSocial[0].total)),
      this.dataServicioSocial.satisfechoHorario= ((this.servicioSocial[0].horario_satisfechos / this.servicioSocial[0].total)*100),
      this.dataServicioSocial.noSatisfechoHorario= (this.servicioSocial[0].horario_no_satisfechos / this.servicioSocial[0].total)*100;
      this.dataServicioSocial.satisfechoDisponibilidad= (this.servicioSocial[0].disponibilidad_satisfechos / this.servicioSocial[0].total)*100,
      this.dataServicioSocial.noSatisfechoDisponibilidad= (this.servicioSocial[0].disponibilidad_no_satisfechos / this.servicioSocial[0].total)*100; 
      this.dataServicioSocial.satisfechoAtencion= (this.servicioSocial[0].atencion_satisfechos / this.servicioSocial[0].total)*100,
      this.dataServicioSocial.noSatisfechoAtencion= (this.servicioSocial[0].atencion_no_satisfechos / this.servicioSocial[0].total)*100;  
      this.dataServicioSocial.satisfechoAmabilidad= (this.servicioSocial[0].amabilidad_satisfechos / this.servicioSocial[0].total)*100,
      this.dataServicioSocial.noSatisfechoAmabilidad= (this.servicioSocial[0].amabilidad_no_satisfechos / this.servicioSocial[0].total)*100; 
      this.dataServicioSocial.satisfechoTotal=(this.dataServicioSocial.satisfechoHorario+this.dataServicioSocial.satisfechoAmabilidad+this.dataServicioSocial.satisfechoAtencion+this.dataServicioSocial.satisfechoDisponibilidad)*.25
      this.dataServicioSocial.noSatisfechoTotal=(this.dataServicioSocial.noSatisfechoHorario+this.dataServicioSocial.noSatisfechoAmabilidad+this.dataServicioSocial.noSatisfechoAtencion+this.dataServicioSocial.noSatisfechoDisponibilidad)*.25
    },
  );

  this.adminService.dataResidencias().subscribe(
    data =>{this.residencias=data,this.dtTrigger,
      this.dataResidencias.total= ((this.residencias[0].total)),
      this.dataResidencias.satisfechoHorario= ((this.residencias[0].horario_satisfechos / this.residencias[0].total)*100),
      this.dataResidencias.noSatisfechoHorario= (this.residencias[0].horario_no_satisfechos / this.residencias[0].total)*100;
      this.dataResidencias.satisfechoDisponibilidad= (this.residencias[0].disponibilidad_satisfechos / this.residencias[0].total)*100,
      this.dataResidencias.noSatisfechoDisponibilidad= (this.residencias[0].disponibilidad_no_satisfechos / this.residencias[0].total)*100; 
      this.dataResidencias.satisfechoAtencion= (this.residencias[0].atencion_satisfechos / this.residencias[0].total)*100,
      this.dataResidencias.noSatisfechoAtencion= (this.residencias[0].atencion_no_satisfechos / this.residencias[0].total)*100;  
      this.dataResidencias.satisfechoAmabilidad= (this.residencias[0].amabilidad_satisfechos / this.residencias[0].total)*100,
      this.dataResidencias.noSatisfechoAmabilidad= (this.residencias[0].amabilidad_no_satisfechos / this.residencias[0].total)*100; 
      this.dataResidencias.satisfechoTotal=(this.dataResidencias.satisfechoHorario+this.dataResidencias.satisfechoAmabilidad+this.dataResidencias.satisfechoAtencion+this.dataResidencias.satisfechoDisponibilidad)*.25
      this.dataResidencias.noSatisfechoTotal=(this.dataResidencias.noSatisfechoHorario+this.dataResidencias.noSatisfechoAmabilidad+this.dataResidencias.noSatisfechoAtencion+this.dataResidencias.noSatisfechoDisponibilidad)*.25
    },
  );
  this.adminService.dataIdiomas().subscribe(
    data =>{this.idiomas=data,this.dtTrigger,
      this.dataIdiomas.total= ((this.idiomas[0].total)),
      this.dataIdiomas.satisfechoHorario= ((this.idiomas[0].horario_satisfechos / this.idiomas[0].total)*100),
      this.dataIdiomas.noSatisfechoHorario= (this.idiomas[0].horario_no_satisfechos / this.idiomas[0].total)*100;
      this.dataIdiomas.satisfechoDisponibilidad= (this.idiomas[0].disponibilidad_satisfechos / this.idiomas[0].total)*100,
      this.dataIdiomas.noSatisfechoDisponibilidad= (this.idiomas[0].disponibilidad_no_satisfechos / this.idiomas[0].total)*100; 
      this.dataIdiomas.satisfechoAtencion= (this.idiomas[0].atencion_satisfechos / this.idiomas[0].total)*100,
      this.dataIdiomas.noSatisfechoAtencion= (this.idiomas[0].atencion_no_satisfechos / this.idiomas[0].total)*100;  
      this.dataIdiomas.satisfechoAmabilidad= (this.idiomas[0].amabilidad_satisfechos / this.idiomas[0].total)*100,
      this.dataIdiomas.noSatisfechoAmabilidad= (this.idiomas[0].amabilidad_no_satisfechos / this.idiomas[0].total)*100; 
      this.dataIdiomas.satisfechoTotal=(this.dataIdiomas.satisfechoHorario+this.dataIdiomas.satisfechoAmabilidad+this.dataIdiomas.satisfechoAtencion+this.dataIdiomas.satisfechoDisponibilidad)*.25
      this.dataIdiomas.noSatisfechoTotal=(this.dataIdiomas.noSatisfechoHorario+this.dataIdiomas.noSatisfechoAmabilidad+this.dataIdiomas.noSatisfechoAtencion+this.dataIdiomas.noSatisfechoDisponibilidad)*.25
    },
  );

  this.adminService.dataCafeteria1().subscribe(
    data =>{this.cafeteria1=data,this.dtTrigger,
      this.dataCafeteria1.total= ((this.cafeteria1[0].total)),
      this.dataCafeteria1.satisfechoHorario= ((this.cafeteria1[0].horario_satisfechos / this.cafeteria1[0].total)*100),
      this.dataCafeteria1.noSatisfechoHorario= (this.cafeteria1[0].horario_no_satisfechos / this.cafeteria1[0].total)*100;
      this.dataCafeteria1.satisfechoDisponibilidad= (this.cafeteria1[0].disponibilidad_satisfechos / this.cafeteria1[0].total)*100,
      this.dataCafeteria1.noSatisfechoDisponibilidad= (this.cafeteria1[0].disponibilidad_no_satisfechos / this.cafeteria1[0].total)*100; 
      this.dataCafeteria1.satisfechoAtencion= (this.cafeteria1[0].atencion_satisfechos / this.cafeteria1[0].total)*100,
      this.dataCafeteria1.noSatisfechoAtencion= (this.cafeteria1[0].atencion_no_satisfechos / this.cafeteria1[0].total)*100;  
      this.dataCafeteria1.satisfechoAmabilidad= (this.cafeteria1[0].amabilidad_satisfechos / this.cafeteria1[0].total)*100,
      this.dataCafeteria1.noSatisfechoAmabilidad= (this.cafeteria1[0].amabilidad_no_satisfechos / this.cafeteria1[0].total)*100; 
      this.dataCafeteria1.satisfechoTotal=(this.dataCafeteria1.satisfechoHorario+this.dataCafeteria1.satisfechoAmabilidad+this.dataCafeteria1.satisfechoAtencion+this.dataCafeteria1.satisfechoDisponibilidad)*.25
      this.dataCafeteria1.noSatisfechoTotal=(this.dataCafeteria1.noSatisfechoHorario+this.dataCafeteria1.noSatisfechoAmabilidad+this.dataCafeteria1.noSatisfechoAtencion+this.dataCafeteria1.noSatisfechoDisponibilidad)*.25
    },
  );
  this.adminService.dataCafeteria2().subscribe(
    data =>{this.cafeteria2=data,this.dtTrigger,
      this.dataCafeteria2.total= ((this.cafeteria2[0].total)),
      this.dataCafeteria2.satisfechoHorario= ((this.cafeteria2[0].horario_satisfechos / this.cafeteria2[0].total)*100),
      this.dataCafeteria2.noSatisfechoHorario= (this.cafeteria2[0].horario_no_satisfechos / this.cafeteria2[0].total)*100;
      this.dataCafeteria2.satisfechoDisponibilidad= (this.cafeteria2[0].disponibilidad_satisfechos / this.cafeteria2[0].total)*100,
      this.dataCafeteria2.noSatisfechoDisponibilidad= (this.cafeteria2[0].disponibilidad_no_satisfechos / this.cafeteria2[0].total)*100; 
      this.dataCafeteria2.satisfechoAtencion= (this.cafeteria2[0].atencion_satisfechos / this.cafeteria2[0].total)*100,
      this.dataCafeteria2.noSatisfechoAtencion= (this.cafeteria2[0].atencion_no_satisfechos / this.cafeteria2[0].total)*100;  
      this.dataCafeteria2.satisfechoAmabilidad= (this.cafeteria2[0].amabilidad_satisfechos / this.cafeteria2[0].total)*100,
      this.dataCafeteria2.noSatisfechoAmabilidad= (this.cafeteria2[0].amabilidad_no_satisfechos / this.cafeteria2[0].total)*100; 
      this.dataCafeteria2.satisfechoTotal=(this.dataCafeteria2.satisfechoHorario+this.dataCafeteria2.satisfechoAmabilidad+this.dataCafeteria2.satisfechoAtencion+this.dataCafeteria2.satisfechoDisponibilidad)*.25
      this.dataCafeteria2.noSatisfechoTotal=(this.dataCafeteria2.noSatisfechoHorario+this.dataCafeteria2.noSatisfechoAmabilidad+this.dataCafeteria2.noSatisfechoAtencion+this.dataCafeteria2.noSatisfechoDisponibilidad)*.25
    },
  );

  this.adminService.dataCajas().subscribe(
    data =>{this.caja=data,this.dtTrigger,
      this.dataCaja.total= ((this.caja[0].total)),
      this.dataCaja.satisfechoHorario= ((this.caja[0].horario_satisfechos / this.caja[0].total)*100),
      this.dataCaja.noSatisfechoHorario= (this.caja[0].horario_no_satisfechos / this.caja[0].total)*100;
      this.dataCaja.satisfechoDisponibilidad= (this.caja[0].disponibilidad_satisfechos / this.caja[0].total)*100,
      this.dataCaja.noSatisfechoDisponibilidad= (this.caja[0].disponibilidad_no_satisfechos / this.caja[0].total)*100; 
      this.dataCaja.satisfechoAtencion= (this.caja[0].atencion_satisfechos / this.caja[0].total)*100,
      this.dataCaja.noSatisfechoAtencion= (this.caja[0].atencion_no_satisfechos / this.caja[0].total)*100;  
      this.dataCaja.satisfechoAmabilidad= (this.caja[0].amabilidad_satisfechos / this.caja[0].total)*100,
      this.dataCaja.noSatisfechoAmabilidad= (this.caja[0].amabilidad_no_satisfechos / this.caja[0].total)*100; 
      this.dataCaja.satisfechoTotal=(this.dataCaja.satisfechoHorario+this.dataCaja.satisfechoAmabilidad+this.dataCaja.satisfechoAtencion+this.dataCaja.satisfechoDisponibilidad)*.25
      this.dataCaja.noSatisfechoTotal=(this.dataCaja.noSatisfechoHorario+this.dataCaja.noSatisfechoAmabilidad+this.dataCaja.noSatisfechoAtencion+this.dataCaja.noSatisfechoDisponibilidad)*.25
    },
  );
  this.adminService.dataCoordinadorDeCarreras().subscribe(
    data =>{this.coordinadorDeCarreras=data,this.dtTrigger,
      this.dataCoordinadorDeCarreras.total= ((this.coordinadorDeCarreras[0].total)),
      this.dataCoordinadorDeCarreras.satisfechoHorario= ((this.coordinadorDeCarreras[0].horario_satisfechos / this.coordinadorDeCarreras[0].total)*100),
      this.dataCoordinadorDeCarreras.noSatisfechoHorario= (this.coordinadorDeCarreras[0].horario_no_satisfechos / this.coordinadorDeCarreras[0].total)*100;
      this.dataCoordinadorDeCarreras.satisfechoDisponibilidad= (this.coordinadorDeCarreras[0].disponibilidad_satisfechos / this.coordinadorDeCarreras[0].total)*100,
      this.dataCoordinadorDeCarreras.noSatisfechoDisponibilidad= (this.coordinadorDeCarreras[0].disponibilidad_no_satisfechos / this.coordinadorDeCarreras[0].total)*100; 
      this.dataCoordinadorDeCarreras.satisfechoAtencion= (this.coordinadorDeCarreras[0].atencion_satisfechos / this.coordinadorDeCarreras[0].total)*100,
      this.dataCoordinadorDeCarreras.noSatisfechoAtencion= (this.coordinadorDeCarreras[0].atencion_no_satisfechos / this.coordinadorDeCarreras[0].total)*100;  
      this.dataCoordinadorDeCarreras.satisfechoAmabilidad= (this.coordinadorDeCarreras[0].amabilidad_satisfechos / this.coordinadorDeCarreras[0].total)*100,
      this.dataCoordinadorDeCarreras.noSatisfechoAmabilidad= (this.coordinadorDeCarreras[0].amabilidad_no_satisfechos / this.coordinadorDeCarreras[0].total)*100; 
      this.dataCoordinadorDeCarreras.satisfechoTotal=(this.dataCoordinadorDeCarreras.satisfechoHorario+this.dataCoordinadorDeCarreras.satisfechoAmabilidad+this.dataCoordinadorDeCarreras.satisfechoAtencion+this.dataCoordinadorDeCarreras.satisfechoDisponibilidad)*.25
      this.dataCoordinadorDeCarreras.noSatisfechoTotal=(this.dataCoordinadorDeCarreras.noSatisfechoHorario+this.dataCoordinadorDeCarreras.noSatisfechoAmabilidad+this.dataCoordinadorDeCarreras.noSatisfechoAtencion+this.dataCoordinadorDeCarreras.noSatisfechoDisponibilidad)*.25
    },
  );
  this.adminService.dataBecas().subscribe(
    data =>{this.becas=data,this.dtTrigger,
      this.dataBecas.total= ((this.becas[0].total)),
      this.dataBecas.satisfechoHorario= ((this.becas[0].horario_satisfechos / this.becas[0].total)*100),
      this.dataBecas.noSatisfechoHorario= (this.becas[0].horario_no_satisfechos / this.becas[0].total)*100;
      this.dataBecas.satisfechoDisponibilidad= (this.becas[0].disponibilidad_satisfechos / this.becas[0].total)*100,
      this.dataBecas.noSatisfechoDisponibilidad= (this.becas[0].disponibilidad_no_satisfechos / this.becas[0].total)*100; 
      this.dataBecas.satisfechoAtencion= (this.becas[0].atencion_satisfechos / this.becas[0].total)*100,
      this.dataBecas.noSatisfechoAtencion= (this.becas[0].atencion_no_satisfechos / this.becas[0].total)*100;  
      this.dataBecas.satisfechoAmabilidad= (this.becas[0].amabilidad_satisfechos / this.becas[0].total)*100,
      this.dataBecas.noSatisfechoAmabilidad= (this.becas[0].amabilidad_no_satisfechos / this.becas[0].total)*100; 
      this.dataBecas.satisfechoTotal=(this.dataBecas.satisfechoHorario+this.dataBecas.satisfechoAmabilidad+this.dataBecas.satisfechoAtencion+this.dataBecas.satisfechoDisponibilidad)*.25
      this.dataBecas.noSatisfechoTotal=(this.dataBecas.noSatisfechoHorario+this.dataBecas.noSatisfechoAmabilidad+this.dataBecas.noSatisfechoAtencion+this.dataBecas.noSatisfechoDisponibilidad)*.25
    },
  );
  this.adminService.dataCentroDeCopiado().subscribe(
    data =>{this.centroDeCopiado=data,this.dtTrigger,
      this.dataCentroDeCopiado.total= ((this.centroDeCopiado[0].total)),
      this.dataCentroDeCopiado.satisfechoHorario= ((this.centroDeCopiado[0].horario_satisfechos / this.centroDeCopiado[0].total)*100),
      this.dataCentroDeCopiado.noSatisfechoHorario= (this.centroDeCopiado[0].horario_no_satisfechos / this.centroDeCopiado[0].total)*100;
      this.dataCentroDeCopiado.satisfechoDisponibilidad= (this.centroDeCopiado[0].disponibilidad_satisfechos / this.centroDeCopiado[0].total)*100,
      this.dataCentroDeCopiado.noSatisfechoDisponibilidad= (this.centroDeCopiado[0].disponibilidad_no_satisfechos / this.centroDeCopiado[0].total)*100; 
      this.dataCentroDeCopiado.satisfechoAtencion= (this.centroDeCopiado[0].atencion_satisfechos / this.centroDeCopiado[0].total)*100,
      this.dataCentroDeCopiado.noSatisfechoAtencion= (this.centroDeCopiado[0].atencion_no_satisfechos / this.centroDeCopiado[0].total)*100;  
      this.dataCentroDeCopiado.satisfechoAmabilidad= (this.centroDeCopiado[0].amabilidad_satisfechos / this.centroDeCopiado[0].total)*100,
      this.dataCentroDeCopiado.noSatisfechoAmabilidad= (this.centroDeCopiado[0].amabilidad_no_satisfechos / this.centroDeCopiado[0].total)*100; 
      this.dataCentroDeCopiado.satisfechoTotal=(this.dataCentroDeCopiado.satisfechoHorario+this.dataCentroDeCopiado.satisfechoAmabilidad+this.dataCentroDeCopiado.satisfechoAtencion+this.dataCentroDeCopiado.satisfechoDisponibilidad)*.25
      this.dataCentroDeCopiado.noSatisfechoTotal=(this.dataCentroDeCopiado.noSatisfechoHorario+this.dataCentroDeCopiado.noSatisfechoAmabilidad+this.dataCentroDeCopiado.noSatisfechoAtencion+this.dataCentroDeCopiado.noSatisfechoDisponibilidad)*.25
    },
  );
  this.adminService.dataPsicologico().subscribe(
    data =>{this.psicologico=data,this.dtTrigger,
      this.dataPsicologico.total= ((this.psicologico[0].total)),
      this.dataPsicologico.satisfechoHorario= ((this.psicologico[0].horario_satisfechos / this.psicologico[0].total)*100),
      this.dataPsicologico.noSatisfechoHorario= (this.psicologico[0].horario_no_satisfechos / this.psicologico[0].total)*100;
      this.dataPsicologico.satisfechoDisponibilidad= (this.psicologico[0].disponibilidad_satisfechos / this.psicologico[0].total)*100,
      this.dataPsicologico.noSatisfechoDisponibilidad= (this.psicologico[0].disponibilidad_no_satisfechos / this.psicologico[0].total)*100; 
      this.dataPsicologico.satisfechoAtencion= (this.psicologico[0].atencion_satisfechos / this.psicologico[0].total)*100,
      this.dataPsicologico.noSatisfechoAtencion= (this.psicologico[0].atencion_no_satisfechos / this.psicologico[0].total)*100;  
      this.dataPsicologico.satisfechoAmabilidad= (this.psicologico[0].amabilidad_satisfechos / this.psicologico[0].total)*100,
      this.dataPsicologico.noSatisfechoAmabilidad= (this.psicologico[0].amabilidad_no_satisfechos / this.psicologico[0].total)*100; 
      this.dataPsicologico.satisfechoTotal=(this.dataPsicologico.satisfechoHorario+this.dataPsicologico.satisfechoAmabilidad+this.dataPsicologico.satisfechoAtencion+this.dataPsicologico.satisfechoDisponibilidad)*.25
      this.dataPsicologico.noSatisfechoTotal=(this.dataPsicologico.noSatisfechoHorario+this.dataPsicologico.noSatisfechoAmabilidad+this.dataPsicologico.noSatisfechoAtencion+this.dataPsicologico.noSatisfechoDisponibilidad)*.25
    },
  );
  this.adminService.dataMedico().subscribe(
    data =>{this.medico=data,this.dtTrigger,
      this.dataMedico.total= ((this.medico[0].total)),
      this.dataMedico.satisfechoHorario= ((this.medico[0].horario_satisfechos / this.medico[0].total)*100),
      this.dataMedico.noSatisfechoHorario= (this.medico[0].horario_no_satisfechos / this.medico[0].total)*100;
      this.dataMedico.satisfechoDisponibilidad= (this.medico[0].disponibilidad_satisfechos / this.medico[0].total)*100,
      this.dataMedico.noSatisfechoDisponibilidad= (this.medico[0].disponibilidad_no_satisfechos / this.medico[0].total)*100; 
      this.dataMedico.satisfechoAtencion= (this.medico[0].atencion_satisfechos / this.medico[0].total)*100,
      this.dataMedico.noSatisfechoAtencion= (this.medico[0].atencion_no_satisfechos / this.medico[0].total)*100;  
      this.dataMedico.satisfechoAmabilidad= (this.medico[0].amabilidad_satisfechos / this.medico[0].total)*100,
      this.dataMedico.noSatisfechoAmabilidad= (this.medico[0].amabilidad_no_satisfechos / this.medico[0].total)*100; 
      this.dataMedico.satisfechoTotal=(this.dataMedico.satisfechoHorario+this.dataMedico.satisfechoAmabilidad+this.dataMedico.satisfechoAtencion+this.dataMedico.satisfechoDisponibilidad)*.25
      this.dataMedico.noSatisfechoTotal=(this.dataMedico.noSatisfechoHorario+this.dataMedico.noSatisfechoAmabilidad+this.dataMedico.noSatisfechoAtencion+this.dataMedico.noSatisfechoDisponibilidad)*.25
    },
  );
  this.adminService.dataAsesoriasAcademicas().subscribe(
    data =>{this.asesoriasAcademicas=data,this.dtTrigger,
      this.dataAsesoriasAcademicas.total= ((this.asesoriasAcademicas[0].total)),
      this.dataAsesoriasAcademicas.satisfechoHorario= ((this.asesoriasAcademicas[0].horario_satisfechos / this.asesoriasAcademicas[0].total)*100),
      this.dataAsesoriasAcademicas.noSatisfechoHorario= (this.asesoriasAcademicas[0].horario_no_satisfechos / this.asesoriasAcademicas[0].total)*100;
      this.dataAsesoriasAcademicas.satisfechoDisponibilidad= (this.asesoriasAcademicas[0].disponibilidad_satisfechos / this.asesoriasAcademicas[0].total)*100,
      this.dataAsesoriasAcademicas.noSatisfechoDisponibilidad= (this.asesoriasAcademicas[0].disponibilidad_no_satisfechos / this.asesoriasAcademicas[0].total)*100; 
      this.dataAsesoriasAcademicas.satisfechoAtencion= (this.asesoriasAcademicas[0].atencion_satisfechos / this.asesoriasAcademicas[0].total)*100,
      this.dataAsesoriasAcademicas.noSatisfechoAtencion= (this.asesoriasAcademicas[0].atencion_no_satisfechos / this.asesoriasAcademicas[0].total)*100;  
      this.dataAsesoriasAcademicas.satisfechoAmabilidad= (this.asesoriasAcademicas[0].amabilidad_satisfechos / this.asesoriasAcademicas[0].total)*100,
      this.dataAsesoriasAcademicas.noSatisfechoAmabilidad= (this.asesoriasAcademicas[0].amabilidad_no_satisfechos / this.asesoriasAcademicas[0].total)*100; 
      this.dataAsesoriasAcademicas.satisfechoTotal=(this.dataAsesoriasAcademicas.satisfechoHorario+this.dataAsesoriasAcademicas.satisfechoAmabilidad+this.dataAsesoriasAcademicas.satisfechoAtencion+this.dataAsesoriasAcademicas.satisfechoDisponibilidad)*.25
      this.dataAsesoriasAcademicas.noSatisfechoTotal=(this.dataAsesoriasAcademicas.noSatisfechoHorario+this.dataAsesoriasAcademicas.noSatisfechoAmabilidad+this.dataAsesoriasAcademicas.noSatisfechoAtencion+this.dataAsesoriasAcademicas.noSatisfechoDisponibilidad)*.25
    },
  );
  
  setTimeout(()=>{   
    $('#datatableexample').DataTable( {
      
    ordering: false,
    info: false,
    searching:false,
    responsive:true,
    scrollX: true,
      paging: false,
      pagingType: 'full_numbers',
      processing: true,
      dom: 'Blfrtip',
  } );
  }, 2000);
  }

}
