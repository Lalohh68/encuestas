import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { text } from "@fortawesome/fontawesome-svg-core";

import { EncuestasService } from "../../encuesta/services/encuesta.service";
import { Subject } from "rxjs";
@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {
  clubes:any=[]
  numero=30
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
      }, title: {
        display: true,
        text: 'Clubes',
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
      { data: [ this.noSatisfechoHorario, 40, 15, 0], label: 'No satisfecho',backgroundColor:'rgba(87, 6, 12, 0.9)' },
      { data: [ this.satisfechoHorario, 60, 85, 100], label: 'Satisfecho',backgroundColor:'rgba(155, 141, 65, 0.9)'  },

    ],
    
  };
  alert: any;

  // events
 
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private encuestaService: EncuestasService, ){}
  ngOnInit(): void {
    this.encuestaService.dataClubes().subscribe(
      data =>{this.clubes=data,this.dtTrigger,
        this.satisfechoHorario= ((this.clubes[0].horario_satisfechos / this.clubes[0].total)*100),
        this.noSatisfechoHorario= (this.clubes[0].horario_no_satisfechos / this.clubes[0].total)*100;
        this.satisfechoDisponibilidad= (this.clubes[0].disponibilidad_satisfechos / this.clubes[0].total)*100,
        this.noSatisfechoDisponibilidad= (this.clubes[0].disponibilidad_no_satisfechos / this.clubes[0].total)*100; 
        this.satisfechoAtencion= (this.clubes[0].atencion_satisfechos / this.clubes[0].total)*100,
        this.noSatisfechoAtencion= (this.clubes[0].atencion_no_satisfechos / this.clubes[0].total)*100;  
        this.satisfechoAmabilidad= (this.clubes[0].amabilidad_satisfechos / this.clubes[0].total)*100,
        this.noSatisfechoAmabilidad= (this.clubes[0].amabilidad_no_satisfechos / this.clubes[0].total)*100; 
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