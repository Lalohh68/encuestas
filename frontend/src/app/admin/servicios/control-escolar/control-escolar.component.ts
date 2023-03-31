import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Subject } from 'rxjs';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-control-escolar',
  templateUrl: './control-escolar.component.html',
  styleUrls: ['../styles/admin.component.scss']
})
export class ControlEscolarComponent implements OnInit {
  controlEscolar:any=[]
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
      { data: [ 0, 40, 15, 0], label: 'No satisfecho',backgroundColor:'rgba(87, 6, 12, 0.9)' },
      { data: [0, 60, 85, 100], label: 'Satisfecho',backgroundColor:'rgba(155, 141, 65, 0.9)' },

    ],
    
  };
  alert: any;

  // events
 
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private adminService: AdminService, ){}
  ngOnInit(): void {
    this.adminService.dataControlEscolar().subscribe(
      data =>{this.controlEscolar=data,this.dtTrigger,
        this.total= ((this.controlEscolar[0].total)),
        this.satisfechoHorario= ((this.controlEscolar[0].horario_satisfechos / this.controlEscolar[0].total)*100),
        this.noSatisfechoHorario= (this.controlEscolar[0].horario_no_satisfechos / this.controlEscolar[0].total)*100;
        this.satisfechoDisponibilidad= (this.controlEscolar[0].disponibilidad_satisfechos / this.controlEscolar[0].total)*100,
        this.noSatisfechoDisponibilidad= (this.controlEscolar[0].disponibilidad_no_satisfechos / this.controlEscolar[0].total)*100; 
        this.satisfechoAtencion= (this.controlEscolar[0].atencion_satisfechos / this.controlEscolar[0].total)*100,
        this.noSatisfechoAtencion= (this.controlEscolar[0].atencion_no_satisfechos / this.controlEscolar[0].total)*100;  
        this.satisfechoAmabilidad= (this.controlEscolar[0].amabilidad_satisfechos / this.controlEscolar[0].total)*100,
        this.noSatisfechoAmabilidad= (this.controlEscolar[0].amabilidad_no_satisfechos / this.controlEscolar[0].total)*100; 
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