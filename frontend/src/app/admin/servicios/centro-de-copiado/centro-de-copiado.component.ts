import { Component, OnInit, ViewChild } from '@angular/core';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { AdminService } from '../../services/admin.service';
import { Subject } from 'rxjs';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-centro-de-copiado',
  templateUrl: './centro-de-copiado.component.html',
  styleUrls: ['../styles/admin.component.scss']
})
export class CentroDeCopiadoComponent implements OnInit {
  centroDeCopiado:any=[]
  total=0
  satisfechoHorario:number=0
  noSatisfechoHorario:number=0
  satisfechoDisponibilidad:number=0
  noSatisfechoDisponibilidad:number=0
  satisfechoAtencion:number=0
  noSatisfechoAtencion:number=0
  satisfechoAmabilidad:number=0
  noSatisfechoAmabilidad:number=0
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0,
        max:100
      },
    },
    plugins: {
      legend: {
        display: true,
      }, 
      datalabels: {
        anchor: 'end',
        align: 'end',
        formatter: function(value, ctx) {
          return ctx.active
            ? (value.toFixed(2)) +'%'
            :  (value.toFixed(2)) +'%';
        },
      }
    
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
    datasets: [
      { data: [ ], label: 'No satisfecho',backgroundColor:'rgba(87, 6, 12, 0.9)' },
      { data: [ ], label: 'Satisfecho',backgroundColor:'rgba(155, 141, 65, 0.9)' },

    ],
    
  };
  alert: any;

  // events
 
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private adminService: AdminService, ){}
  ngOnInit(): void {
    this.adminService.dataCentroDeCopiado().subscribe(
      data =>{this.centroDeCopiado=data,this.dtTrigger,
        this.total= ((this.centroDeCopiado[0].total)),
        this.satisfechoHorario= ((this.centroDeCopiado[0].horario_satisfechos / this.centroDeCopiado[0].total)*100),
        this.noSatisfechoHorario= (this.centroDeCopiado[0].horario_no_satisfechos / this.centroDeCopiado[0].total)*100;
        this.satisfechoDisponibilidad= (this.centroDeCopiado[0].disponibilidad_satisfechos / this.centroDeCopiado[0].total)*100,
        this.noSatisfechoDisponibilidad= (this.centroDeCopiado[0].disponibilidad_no_satisfechos / this.centroDeCopiado[0].total)*100; 
        this.satisfechoAtencion= (this.centroDeCopiado[0].atencion_satisfechos / this.centroDeCopiado[0].total)*100,
        this.noSatisfechoAtencion= (this.centroDeCopiado[0].atencion_no_satisfechos / this.centroDeCopiado[0].total)*100;  
        this.satisfechoAmabilidad= (this.centroDeCopiado[0].amabilidad_satisfechos / this.centroDeCopiado[0].total)*100,
        this.noSatisfechoAmabilidad= (this.centroDeCopiado[0].amabilidad_no_satisfechos / this.centroDeCopiado[0].total)*100; 
        this.barChartData={
      labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
      datasets: [
        { data: [ this.noSatisfechoHorario, this.noSatisfechoDisponibilidad, this.noSatisfechoAtencion, this.noSatisfechoAmabilidad], label: 'No satisfecho',backgroundColor:'rgba(87, 6, 12, 0.9)' },
        { data: [ this.satisfechoHorario, this.satisfechoDisponibilidad, this.satisfechoAtencion, this.satisfechoAmabilidad], label: 'Satisfecho',backgroundColor:'rgba(155, 141, 65, 0.9)'  },
  
      ],
    }
      },
      res=>{
    
      }
    );
   
  }
  
}