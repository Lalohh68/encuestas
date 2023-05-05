import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Subject } from 'rxjs';
import { TicsService } from '../../services/tics.service'
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-tics',
  templateUrl: './tics.component.html',
  styleUrls: ['../../servicios/styles/admin.component.scss']
})
export class TicsComponent implements OnInit {


  clubes:any=[]
  totalClubes=0
  satisfechoHorarioClubes:number=0
  noSatisfechoHorarioClubes:number=0
  satisfechoDisponibilidadClubes:number=0
  noSatisfechoDisponibilidadClubes:number=0
  satisfechoAtencionClubes:number=0
  noSatisfechoAtencionClubes:number=0
  satisfechoAmabilidadClubes:number=0
  noSatisfechoAmabilidadClubes:number=0

  serviciosEscolares:any=[]
  totalServiciosEscolares=0
  satisfechoHorarioServiciosEscolares:number=0
  noSatisfechoHorarioServiciosEscolares:number=0
  satisfechoDisponibilidadServiciosEscolares:number=0
  noSatisfechoDisponibilidadServiciosEscolares:number=0
  satisfechoAtencionServiciosEscolares:number=0
  noSatisfechoAtencionServiciosEscolares:number=0
  satisfechoAmabilidadServiciosEscolares:number=0
  noSatisfechoAmabilidadServiciosEscolares:number=0

  tutorias:any=[]
  totalTutorias=0
  satisfechoHorarioTutorias:number=0
  noSatisfechoHorarioTutorias:number=0
  satisfechoDisponibilidadTutorias:number=0
  noSatisfechoDisponibilidadTutorias:number=0
  satisfechoAtencionTutorias:number=0
  noSatisfechoAtencionTutorias:number=0
  satisfechoAmabilidadTutorias:number=0
  noSatisfechoAmabilidadTutorias:number=0

  biblioteca:any=[]
  totalBiblioteca=0
  satisfechoHorarioBiblioteca:number=0
  noSatisfechoHorarioBiblioteca:number=0
  satisfechoDisponibilidadBiblioteca:number=0
  noSatisfechoDisponibilidadBiblioteca:number=0
  satisfechoAtencionBiblioteca:number=0
  noSatisfechoAtencionBiblioteca:number=0
  satisfechoAmabilidadBiblioteca:number=0
  noSatisfechoAmabilidadBiblioteca:number=0

  centroDeComputo:any=[]
  totalCentroDeComputo=0
  satisfechoHorarioCentroDeComputo:number=0
  noSatisfechoHorarioCentroDeComputo:number=0
  satisfechoDisponibilidadCentroDeComputo:number=0
  noSatisfechoDisponibilidadCentroDeComputo:number=0
  satisfechoAtencionCentroDeComputo:number=0
  noSatisfechoAtencionCentroDeComputo:number=0
  satisfechoAmabilidadCentroDeComputo:number=0
  noSatisfechoAmabilidadCentroDeComputo:number=0

  servicioSocial:any=[]
  totalServicioSocial=0
  satisfechoHorarioServicioSocial:number=0
  noSatisfechoHorarioServicioSocial:number=0
  satisfechoDisponibilidadServicioSocial:number=0
  noSatisfechoDisponibilidadServicioSocial:number=0
  satisfechoAtencionServicioSocial:number=0
  noSatisfechoAtencionServicioSocial:number=0
  satisfechoAmabilidadServicioSocial:number=0
  noSatisfechoAmabilidadServicioSocial:number=0

  residencias:any=[]
  totalResidencias=0
  satisfechoHorarioResidencias:number=0
  noSatisfechoHorarioResidencias:number=0
  satisfechoDisponibilidadResidencias:number=0
  noSatisfechoDisponibilidadResidencias:number=0
  satisfechoAtencionResidencias:number=0
  noSatisfechoAtencionResidencias:number=0
  satisfechoAmabilidadResidencias:number=0
  noSatisfechoAmabilidadResidencias:number=0

  idiomas:any=[]
  totalIdiomas=0
  satisfechoHorarioIdiomas:number=0
  noSatisfechoHorarioIdiomas:number=0
  satisfechoDisponibilidadIdiomas:number=0
  noSatisfechoDisponibilidadIdiomas:number=0
  satisfechoAtencionIdiomas:number=0
  noSatisfechoAtencionIdiomas:number=0
  satisfechoAmabilidadIdiomas:number=0
  noSatisfechoAmabilidadIdiomas:number=0

  cafeteria1:any=[]
  totalCafeteria1=0
  satisfechoHorarioCafeteria1:number=0
  noSatisfechoHorarioCafeteria1:number=0
  satisfechoDisponibilidadCafeteria1:number=0
  noSatisfechoDisponibilidadCafeteria1:number=0
  satisfechoAtencionCafeteria1:number=0
  noSatisfechoAtencionCafeteria1:number=0
  satisfechoAmabilidadCafeteria1:number=0
  noSatisfechoAmabilidadCafeteria1:number=0
  
  cafeteria2:any=[]
  totalCafeteria2=0
  satisfechoHorarioCafeteria2:number=0
  noSatisfechoHorarioCafeteria2:number=0
  satisfechoDisponibilidadCafeteria2:number=0
  noSatisfechoDisponibilidadCafeteria2:number=0
  satisfechoAtencionCafeteria2:number=0
  noSatisfechoAtencionCafeteria2:number=0
  satisfechoAmabilidadCafeteria2:number=0
  noSatisfechoAmabilidadCafeteria2:number=0

  cajas:any=[]
  totalCajas=0
  satisfechoHorarioCajas:number=0
  noSatisfechoHorarioCajas:number=0
  satisfechoDisponibilidadCajas:number=0
  noSatisfechoDisponibilidadCajas:number=0
  satisfechoAtencionCajas:number=0
  noSatisfechoAtencionCajas:number=0
  satisfechoAmabilidadCajas:number=0
  noSatisfechoAmabilidadCajas:number=0

  coordinadorDeCarreras:any=[]
  totalCoordinadorDeCarreras=0
  satisfechoHorarioCoordinadorDeCarreras:number=0
  noSatisfechoHorarioCoordinadorDeCarreras:number=0
  satisfechoDisponibilidadCoordinadorDeCarreras:number=0
  noSatisfechoDisponibilidadCoordinadorDeCarreras:number=0
  satisfechoAtencionCoordinadorDeCarreras:number=0
  noSatisfechoAtencionCoordinadorDeCarreras:number=0
  satisfechoAmabilidadCoordinadorDeCarreras:number=0
  noSatisfechoAmabilidadCoordinadorDeCarreras:number=0

  becas:any=[]
  totalBecas=0
  satisfechoHorarioBecas:number=0
  noSatisfechoHorarioBecas:number=0
  satisfechoDisponibilidadBecas:number=0
  noSatisfechoDisponibilidadBecas:number=0
  satisfechoAtencionBecas:number=0
  noSatisfechoAtencionBecas:number=0
  satisfechoAmabilidadBecas:number=0
  noSatisfechoAmabilidadBecas:number=0

  centroDeCopiado:any=[]
  totalCentroDeCopiado=0
  satisfechoHorarioCentroDeCopiado:number=0
  noSatisfechoHorarioCentroDeCopiado:number=0
  satisfechoDisponibilidadCentroDeCopiado:number=0
  noSatisfechoDisponibilidadCentroDeCopiado:number=0
  satisfechoAtencionCentroDeCopiado:number=0
  noSatisfechoAtencionCentroDeCopiado:number=0
  satisfechoAmabilidadCentroDeCopiado:number=0
  noSatisfechoAmabilidadCentroDeCopiado:number=0

  psicologico:any=[]
  totalPsicologico=0
  satisfechoHorarioPsicologico:number=0
  noSatisfechoHorarioPsicologico:number=0
  satisfechoDisponibilidadPsicologico:number=0
  noSatisfechoDisponibilidadPsicologico:number=0
  satisfechoAtencionPsicologico:number=0
  noSatisfechoAtencionPsicologico:number=0
  satisfechoAmabilidadPsicologico:number=0
  noSatisfechoAmabilidadPsicologico:number=0

  medico:any=[]
  totalMedico=0
  satisfechoHorarioMedico:number=0
  noSatisfechoHorarioMedico:number=0
  satisfechoDisponibilidadMedico:number=0
  noSatisfechoDisponibilidadMedico:number=0
  satisfechoAtencionMedico:number=0
  noSatisfechoAtencionMedico:number=0
  satisfechoAmabilidadMedico:number=0
  noSatisfechoAmabilidadMedico:number=0

  asesoriasAcademicas:any=[]
  totalAsesoriasAcademicas=0
  satisfechoHorarioAsesoriasAcademicas:number=0
  noSatisfechoHorarioAsesoriasAcademicas:number=0
  satisfechoDisponibilidadAsesoriasAcademicas:number=0
  noSatisfechoDisponibilidadAsesoriasAcademicas:number=0
  satisfechoAtencionAsesoriasAcademicas:number=0
  noSatisfechoAtencionAsesoriasAcademicas:number=0
  satisfechoAmabilidadAsesoriasAcademicas:number=0
  noSatisfechoAmabilidadAsesoriasAcademicas:number=0

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

  public ClubesBarChartData: ChartData<'bar'> = {
    labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
    datasets: [  
    ], 
  };
  public ServiciosEcolaresBarChartData: ChartData<'bar'> = {
    labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
    datasets: [  
    ], 
  };
  public TutoriasBarChartData: ChartData<'bar'> = {
    labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
    datasets: [  
    ], 
  };
  public BibliotecaBarChartData: ChartData<'bar'> = {
    labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
    datasets: [  
    ], 
  };
  public CentroDeComputoBarChartData: ChartData<'bar'> = {
    labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
    datasets: [  
    ], 
  };
  public ServicioSocialBarChartData: ChartData<'bar'> = {
    labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
    datasets: [  
    ], 
  };
  public ResidenciasBarChartData: ChartData<'bar'> = {
    labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
    datasets: [  
    ], 
  };
  public IdiomasBarChartData: ChartData<'bar'> = {
    labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
    datasets: [  
    ], 
  };
  public Cafeteria1BarChartData: ChartData<'bar'> = {
    labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
    datasets: [  
    ], 
  };
  public Cafeteria2BarChartData: ChartData<'bar'> = {
    labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
    datasets: [  
    ], 
  };
  public CajasBarChartData: ChartData<'bar'> = {
    labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
    datasets: [  
    ], 
  };
  public CoordinadorDeCarrerasBarChartData: ChartData<'bar'> = {
    labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
    datasets: [  
    ], 
  };
  public BecasBarChartData: ChartData<'bar'> = {
    labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
    datasets: [  
    ], 
  };
  public CentroDeCopiadoBarChartData: ChartData<'bar'> = {
    labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
    datasets: [  
    ], 
  };
  public PsicologicoBarChartData: ChartData<'bar'> = {
    labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
    datasets: [  
    ], 
  };
  public MedicoBarChartData: ChartData<'bar'> = {
    labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
    datasets: [  
    ], 
  };
  public AsesoriasAcademicasBarChartData: ChartData<'bar'> = {
    labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
    datasets: [  
    ], 
  };

  // events
 
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private ticsService: TicsService, ){}
  ngOnInit(): void {
    this.ticsService.dataClubes().subscribe(
      data =>{this.clubes=data,this.dtTrigger,
        this.totalClubes= ((this.clubes[0].total)),
        this.satisfechoHorarioClubes= ((this.clubes[0].horario_satisfechos / this.clubes[0].total)*100),
        this.noSatisfechoHorarioClubes= (this.clubes[0].horario_no_satisfechos / this.clubes[0].total)*100;
        this.satisfechoDisponibilidadClubes= (this.clubes[0].disponibilidad_satisfechos / this.clubes[0].total)*100,
        this.noSatisfechoDisponibilidadClubes= (this.clubes[0].disponibilidad_no_satisfechos / this.clubes[0].total)*100; 
        this.satisfechoAtencionClubes= (this.clubes[0].atencion_satisfechos / this.clubes[0].total)*100,
        this.noSatisfechoAtencionClubes= (this.clubes[0].atencion_no_satisfechos / this.clubes[0].total)*100;  
        this.satisfechoAmabilidadClubes= (this.clubes[0].amabilidad_satisfechos / this.clubes[0].total)*100,
        this.noSatisfechoAmabilidadClubes= (this.clubes[0].amabilidad_no_satisfechos / this.clubes[0].total)*100; 
        this.ClubesBarChartData={
      labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
      datasets: [
        { data: [ this.noSatisfechoHorarioClubes, this.noSatisfechoDisponibilidadClubes, this.noSatisfechoAtencionClubes, this.noSatisfechoAmabilidadClubes], label: 'No satisfecho',backgroundColor:'rgba(87, 6, 12, 0.9)' },
        { data: [ this.satisfechoHorarioClubes, this.satisfechoDisponibilidadClubes, this.satisfechoAtencionClubes, this.satisfechoAmabilidadClubes], label: 'Satisfecho',backgroundColor:'rgba(155, 141, 65, 0.9)'  },
  
      ],
    }
      },
      
    );
   
    this.ticsService.dataControlEscolar().subscribe(
      data =>{this.serviciosEscolares=data,this.dtTrigger,
        this.totalServiciosEscolares= ((this.serviciosEscolares[0].total)),
        this.satisfechoHorarioServiciosEscolares= ((this.serviciosEscolares[0].horario_satisfechos / this.serviciosEscolares[0].total)*100),
        this.noSatisfechoHorarioServiciosEscolares= (this.serviciosEscolares[0].horario_no_satisfechos / this.serviciosEscolares[0].total)*100;
        this.satisfechoDisponibilidadServiciosEscolares= (this.serviciosEscolares[0].disponibilidad_satisfechos / this.serviciosEscolares[0].total)*100,
        this.noSatisfechoDisponibilidadServiciosEscolares= (this.serviciosEscolares[0].disponibilidad_no_satisfechos / this.serviciosEscolares[0].total)*100; 
        this.satisfechoAtencionServiciosEscolares= (this.serviciosEscolares[0].atencion_satisfechos / this.serviciosEscolares[0].total)*100,
        this.noSatisfechoAtencionServiciosEscolares= (this.serviciosEscolares[0].atencion_no_satisfechos / this.serviciosEscolares[0].total)*100;  
        this.satisfechoAmabilidadServiciosEscolares= (this.serviciosEscolares[0].amabilidad_satisfechos / this.serviciosEscolares[0].total)*100,
        this.noSatisfechoAmabilidadServiciosEscolares= (this.serviciosEscolares[0].amabilidad_no_satisfechos / this.serviciosEscolares[0].total)*100; 
        this.ServiciosEcolaresBarChartData={
      labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
      datasets: [
        { data: [ this.noSatisfechoHorarioServiciosEscolares, this.noSatisfechoDisponibilidadServiciosEscolares, this.noSatisfechoAtencionServiciosEscolares, this.noSatisfechoAmabilidadServiciosEscolares], label: 'No satisfecho',backgroundColor:'rgba(87, 6, 12, 0.9)' },
        { data: [ this.satisfechoHorarioServiciosEscolares, this.satisfechoDisponibilidadServiciosEscolares, this.satisfechoAtencionServiciosEscolares, this.satisfechoAmabilidadServiciosEscolares], label: 'Satisfecho',backgroundColor:'rgba(155, 141, 65, 0.9)'  },
  
      ],
    }
      },
      
    );

    this.ticsService.dataTutorias().subscribe(
      data =>{this.tutorias=data,this.dtTrigger,
        this.totalTutorias= ((this.tutorias[0].total)),
        this.satisfechoHorarioTutorias= ((this.tutorias[0].horario_satisfechos / this.tutorias[0].total)*100),
        this.noSatisfechoHorarioTutorias= (this.tutorias[0].horario_no_satisfechos / this.tutorias[0].total)*100;
        this.satisfechoDisponibilidadTutorias= (this.tutorias[0].disponibilidad_satisfechos / this.tutorias[0].total)*100,
        this.noSatisfechoDisponibilidadTutorias= (this.tutorias[0].disponibilidad_no_satisfechos / this.tutorias[0].total)*100; 
        this.satisfechoAtencionTutorias= (this.tutorias[0].atencion_satisfechos / this.tutorias[0].total)*100,
        this.noSatisfechoAtencionTutorias= (this.tutorias[0].atencion_no_satisfechos / this.tutorias[0].total)*100;  
        this.satisfechoAmabilidadTutorias= (this.tutorias[0].amabilidad_satisfechos / this.tutorias[0].total)*100,
        this.noSatisfechoAmabilidadTutorias= (this.tutorias[0].amabilidad_no_satisfechos / this.tutorias[0].total)*100; 
        this.TutoriasBarChartData={
      labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
      datasets: [
        { data: [ this.noSatisfechoHorarioTutorias, this.noSatisfechoDisponibilidadTutorias, this.noSatisfechoAtencionTutorias, this.noSatisfechoAmabilidadTutorias], label: 'No satisfecho',backgroundColor:'rgba(87, 6, 12, 0.9)' },
        { data: [ this.satisfechoHorarioTutorias, this.satisfechoDisponibilidadTutorias, this.satisfechoAtencionTutorias, this.satisfechoAmabilidadTutorias], label: 'Satisfecho',backgroundColor:'rgba(155, 141, 65, 0.9)'  },
  
      ],
    }
      },
      
    );

    this.ticsService.dataBiblioteca().subscribe(
      data =>{this.biblioteca=data,this.dtTrigger,
        this.totalBiblioteca= ((this.biblioteca[0].total)),
        this.satisfechoHorarioBiblioteca= ((this.biblioteca[0].horario_satisfechos / this.biblioteca[0].total)*100),
        this.noSatisfechoHorarioBiblioteca= (this.biblioteca[0].horario_no_satisfechos / this.biblioteca[0].total)*100;
        this.satisfechoDisponibilidadBiblioteca= (this.biblioteca[0].disponibilidad_satisfechos / this.biblioteca[0].total)*100,
        this.noSatisfechoDisponibilidadBiblioteca= (this.biblioteca[0].disponibilidad_no_satisfechos / this.biblioteca[0].total)*100; 
        this.satisfechoAtencionBiblioteca= (this.biblioteca[0].atencion_satisfechos / this.biblioteca[0].total)*100,
        this.noSatisfechoAtencionBiblioteca= (this.biblioteca[0].atencion_no_satisfechos / this.biblioteca[0].total)*100;  
        this.satisfechoAmabilidadBiblioteca= (this.biblioteca[0].amabilidad_satisfechos / this.biblioteca[0].total)*100,
        this.noSatisfechoAmabilidadBiblioteca= (this.biblioteca[0].amabilidad_no_satisfechos / this.biblioteca[0].total)*100; 
        this.BibliotecaBarChartData={
      labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
      datasets: [
        { data: [ this.noSatisfechoHorarioBiblioteca, this.noSatisfechoDisponibilidadBiblioteca, this.noSatisfechoAtencionBiblioteca, this.noSatisfechoAmabilidadBiblioteca], label: 'No satisfecho',backgroundColor:'rgba(87, 6, 12, 0.9)' },
        { data: [ this.satisfechoHorarioBiblioteca, this.satisfechoDisponibilidadBiblioteca, this.satisfechoAtencionBiblioteca, this.satisfechoAmabilidadBiblioteca], label: 'Satisfecho',backgroundColor:'rgba(155, 141, 65, 0.9)'  },
  
      ],
    }
      },
      
    );
    this.ticsService.dataCentroDeComputo().subscribe(
      data =>{this.centroDeComputo=data,this.dtTrigger,
        this.totalCentroDeComputo= ((this.centroDeComputo[0].total)),
        this.satisfechoHorarioCentroDeComputo= ((this.centroDeComputo[0].horario_satisfechos / this.centroDeComputo[0].total)*100),
        this.noSatisfechoHorarioCentroDeComputo= (this.centroDeComputo[0].horario_no_satisfechos / this.centroDeComputo[0].total)*100;
        this.satisfechoDisponibilidadCentroDeComputo= (this.centroDeComputo[0].disponibilidad_satisfechos / this.centroDeComputo[0].total)*100,
        this.noSatisfechoDisponibilidadCentroDeComputo= (this.centroDeComputo[0].disponibilidad_no_satisfechos / this.centroDeComputo[0].total)*100; 
        this.satisfechoAtencionCentroDeComputo= (this.centroDeComputo[0].atencion_satisfechos / this.centroDeComputo[0].total)*100,
        this.noSatisfechoAtencionCentroDeComputo= (this.centroDeComputo[0].atencion_no_satisfechos / this.centroDeComputo[0].total)*100;  
        this.satisfechoAmabilidadCentroDeComputo= (this.centroDeComputo[0].amabilidad_satisfechos / this.centroDeComputo[0].total)*100,
        this.noSatisfechoAmabilidadCentroDeComputo= (this.centroDeComputo[0].amabilidad_no_satisfechos / this.centroDeComputo[0].total)*100; 
        this.CentroDeComputoBarChartData={
      labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
      datasets: [
        { data: [ this.noSatisfechoHorarioCentroDeComputo, this.noSatisfechoDisponibilidadCentroDeComputo, this.noSatisfechoAtencionCentroDeComputo, this.noSatisfechoAmabilidadCentroDeComputo], label: 'No satisfecho',backgroundColor:'rgba(87, 6, 12, 0.9)' },
        { data: [ this.satisfechoHorarioCentroDeComputo, this.satisfechoDisponibilidadCentroDeComputo, this.satisfechoAtencionCentroDeComputo, this.satisfechoAmabilidadCentroDeComputo], label: 'Satisfecho',backgroundColor:'rgba(155, 141, 65, 0.9)'  },
  
      ],
    }
      },
      
    );
    this.ticsService.dataServicioSocial().subscribe(
      data =>{this.servicioSocial=data,this.dtTrigger,
        this.totalServicioSocial= ((this.servicioSocial[0].total)),
        this.satisfechoHorarioServicioSocial= ((this.servicioSocial[0].horario_satisfechos / this.servicioSocial[0].total)*100),
        this.noSatisfechoHorarioServicioSocial= (this.servicioSocial[0].horario_no_satisfechos / this.servicioSocial[0].total)*100;
        this.satisfechoDisponibilidadServicioSocial= (this.servicioSocial[0].disponibilidad_satisfechos / this.servicioSocial[0].total)*100,
        this.noSatisfechoDisponibilidadServicioSocial= (this.servicioSocial[0].disponibilidad_no_satisfechos / this.servicioSocial[0].total)*100; 
        this.satisfechoAtencionServicioSocial= (this.servicioSocial[0].atencion_satisfechos / this.servicioSocial[0].total)*100,
        this.noSatisfechoAtencionServicioSocial= (this.servicioSocial[0].atencion_no_satisfechos / this.servicioSocial[0].total)*100;  
        this.satisfechoAmabilidadServicioSocial= (this.servicioSocial[0].amabilidad_satisfechos / this.servicioSocial[0].total)*100,
        this.noSatisfechoAmabilidadServicioSocial= (this.servicioSocial[0].amabilidad_no_satisfechos / this.servicioSocial[0].total)*100; 
        this.ServicioSocialBarChartData={
      labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
      datasets: [
        { data: [ this.noSatisfechoHorarioServicioSocial, this.noSatisfechoDisponibilidadServicioSocial, this.noSatisfechoAtencionServicioSocial, this.noSatisfechoAmabilidadServicioSocial], label: 'No satisfecho',backgroundColor:'rgba(87, 6, 12, 0.9)' },
        { data: [ this.satisfechoHorarioServicioSocial, this.satisfechoDisponibilidadServicioSocial, this.satisfechoAtencionServicioSocial, this.satisfechoAmabilidadServicioSocial], label: 'Satisfecho',backgroundColor:'rgba(155, 141, 65, 0.9)'  },
  
      ],
    }
      },
      
    );
    this.ticsService.dataResidencias().subscribe(
      data =>{this.residencias=data,this.dtTrigger,
        this.totalResidencias= ((this.residencias[0].total)),
        this.satisfechoHorarioResidencias= ((this.residencias[0].horario_satisfechos / this.residencias[0].total)*100),
        this.noSatisfechoHorarioResidencias= (this.residencias[0].horario_no_satisfechos / this.residencias[0].total)*100;
        this.satisfechoDisponibilidadResidencias= (this.residencias[0].disponibilidad_satisfechos / this.residencias[0].total)*100,
        this.noSatisfechoDisponibilidadResidencias= (this.residencias[0].disponibilidad_no_satisfechos / this.residencias[0].total)*100; 
        this.satisfechoAtencionResidencias= (this.residencias[0].atencion_satisfechos / this.residencias[0].total)*100,
        this.noSatisfechoAtencionResidencias= (this.residencias[0].atencion_no_satisfechos / this.residencias[0].total)*100;  
        this.satisfechoAmabilidadResidencias= (this.residencias[0].amabilidad_satisfechos / this.residencias[0].total)*100,
        this.noSatisfechoAmabilidadResidencias= (this.residencias[0].amabilidad_no_satisfechos / this.residencias[0].total)*100; 
        this.ResidenciasBarChartData={
      labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
      datasets: [
        { data: [ this.noSatisfechoHorarioResidencias, this.noSatisfechoDisponibilidadResidencias, this.noSatisfechoAtencionResidencias, this.noSatisfechoAmabilidadResidencias], label: 'No satisfecho',backgroundColor:'rgba(87, 6, 12, 0.9)' },
        { data: [ this.satisfechoHorarioResidencias, this.satisfechoDisponibilidadResidencias, this.satisfechoAtencionResidencias, this.satisfechoAmabilidadResidencias], label: 'Satisfecho',backgroundColor:'rgba(155, 141, 65, 0.9)'  },
  
      ],
    }
      },
      
    );

    this.ticsService.dataIdiomas().subscribe(
      data =>{this.idiomas=data,this.dtTrigger,
        this.totalIdiomas= ((this.idiomas[0].total)),
        this.satisfechoHorarioIdiomas= ((this.idiomas[0].horario_satisfechos / this.idiomas[0].total)*100),
        this.noSatisfechoHorarioIdiomas= (this.idiomas[0].horario_no_satisfechos / this.idiomas[0].total)*100;
        this.satisfechoDisponibilidadIdiomas= (this.idiomas[0].disponibilidad_satisfechos / this.idiomas[0].total)*100,
        this.noSatisfechoDisponibilidadIdiomas= (this.idiomas[0].disponibilidad_no_satisfechos / this.idiomas[0].total)*100; 
        this.satisfechoAtencionIdiomas= (this.idiomas[0].atencion_satisfechos / this.idiomas[0].total)*100,
        this.noSatisfechoAtencionIdiomas= (this.idiomas[0].atencion_no_satisfechos / this.idiomas[0].total)*100;  
        this.satisfechoAmabilidadIdiomas= (this.idiomas[0].amabilidad_satisfechos / this.idiomas[0].total)*100,
        this.noSatisfechoAmabilidadIdiomas= (this.idiomas[0].amabilidad_no_satisfechos / this.idiomas[0].total)*100; 
        this.IdiomasBarChartData={
      labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
      datasets: [
        { data: [ this.noSatisfechoHorarioIdiomas, this.noSatisfechoDisponibilidadIdiomas, this.noSatisfechoAtencionIdiomas, this.noSatisfechoAmabilidadIdiomas], label: 'No satisfecho',backgroundColor:'rgba(87, 6, 12, 0.9)' },
        { data: [ this.satisfechoHorarioIdiomas, this.satisfechoDisponibilidadIdiomas, this.satisfechoAtencionIdiomas, this.satisfechoAmabilidadIdiomas], label: 'Satisfecho',backgroundColor:'rgba(155, 141, 65, 0.9)'  },
  
      ],
    }
      },
      
    );
    this.ticsService.dataCafeteria1().subscribe(
      data =>{this.cafeteria1=data,this.dtTrigger,
        this.totalCafeteria1= ((this.cafeteria1[0].total)),
        this.satisfechoHorarioCafeteria1= ((this.cafeteria1[0].horario_satisfechos / this.cafeteria1[0].total)*100),
        this.noSatisfechoHorarioCafeteria1= (this.cafeteria1[0].horario_no_satisfechos / this.cafeteria1[0].total)*100;
        this.satisfechoDisponibilidadCafeteria1= (this.cafeteria1[0].disponibilidad_satisfechos / this.cafeteria1[0].total)*100,
        this.noSatisfechoDisponibilidadCafeteria1= (this.cafeteria1[0].disponibilidad_no_satisfechos / this.cafeteria1[0].total)*100; 
        this.satisfechoAtencionCafeteria1= (this.cafeteria1[0].atencion_satisfechos / this.cafeteria1[0].total)*100,
        this.noSatisfechoAtencionCafeteria1= (this.cafeteria1[0].atencion_no_satisfechos / this.cafeteria1[0].total)*100;  
        this.satisfechoAmabilidadCafeteria1= (this.cafeteria1[0].amabilidad_satisfechos / this.cafeteria1[0].total)*100,
        this.noSatisfechoAmabilidadCafeteria1= (this.cafeteria1[0].amabilidad_no_satisfechos / this.cafeteria1[0].total)*100; 
        this.Cafeteria1BarChartData={
      labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
      datasets: [
        { data: [ this.noSatisfechoHorarioCafeteria1, this.noSatisfechoDisponibilidadCafeteria1, this.noSatisfechoAtencionCafeteria1, this.noSatisfechoAmabilidadCafeteria1], label: 'No satisfecho',backgroundColor:'rgba(87, 6, 12, 0.9)' },
        { data: [ this.satisfechoHorarioCafeteria1, this.satisfechoDisponibilidadCafeteria1, this.satisfechoAtencionCafeteria1, this.satisfechoAmabilidadCafeteria1], label: 'Satisfecho',backgroundColor:'rgba(155, 141, 65, 0.9)'  },
  
      ],
    }
      },
      
    );
    this.ticsService.dataCafeteria2().subscribe(
      data =>{this.cafeteria2=data,this.dtTrigger,
        this.totalCafeteria2= ((this.cafeteria2[0].total)),
        this.satisfechoHorarioCafeteria2= ((this.cafeteria2[0].horario_satisfechos / this.cafeteria2[0].total)*100),
        this.noSatisfechoHorarioCafeteria2= (this.cafeteria2[0].horario_no_satisfechos / this.cafeteria2[0].total)*100;
        this.satisfechoDisponibilidadCafeteria2= (this.cafeteria2[0].disponibilidad_satisfechos / this.cafeteria2[0].total)*100,
        this.noSatisfechoDisponibilidadCafeteria2= (this.cafeteria2[0].disponibilidad_no_satisfechos / this.cafeteria2[0].total)*100; 
        this.satisfechoAtencionCafeteria2= (this.cafeteria2[0].atencion_satisfechos / this.cafeteria2[0].total)*100,
        this.noSatisfechoAtencionCafeteria2= (this.cafeteria2[0].atencion_no_satisfechos / this.cafeteria2[0].total)*100;  
        this.satisfechoAmabilidadCafeteria2= (this.cafeteria2[0].amabilidad_satisfechos / this.cafeteria2[0].total)*100,
        this.noSatisfechoAmabilidadCafeteria2= (this.cafeteria2[0].amabilidad_no_satisfechos / this.cafeteria2[0].total)*100; 
        this.Cafeteria2BarChartData={
      labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
      datasets: [
        { data: [ this.noSatisfechoHorarioCafeteria2, this.noSatisfechoDisponibilidadCafeteria2, this.noSatisfechoAtencionCafeteria2, this.noSatisfechoAmabilidadCafeteria2], label: 'No satisfecho',backgroundColor:'rgba(87, 6, 12, 0.9)' },
        { data: [ this.satisfechoHorarioCafeteria2, this.satisfechoDisponibilidadCafeteria2, this.satisfechoAtencionCafeteria2, this.satisfechoAmabilidadCafeteria2], label: 'Satisfecho',backgroundColor:'rgba(155, 141, 65, 0.9)'  },
  
      ],
    }
      },
      
    );
    this.ticsService.dataCajas().subscribe(
      data =>{this.cajas=data,this.dtTrigger,
        this.totalCajas= ((this.cajas[0].total)),
        this.satisfechoHorarioCajas= ((this.cajas[0].horario_satisfechos / this.cajas[0].total)*100),
        this.noSatisfechoHorarioCajas= (this.cajas[0].horario_no_satisfechos / this.cajas[0].total)*100;
        this.satisfechoDisponibilidadCajas= (this.cajas[0].disponibilidad_satisfechos / this.cajas[0].total)*100,
        this.noSatisfechoDisponibilidadCajas= (this.cajas[0].disponibilidad_no_satisfechos / this.cajas[0].total)*100; 
        this.satisfechoAtencionCajas= (this.cajas[0].atencion_satisfechos / this.cajas[0].total)*100,
        this.noSatisfechoAtencionCajas= (this.cajas[0].atencion_no_satisfechos / this.cajas[0].total)*100;  
        this.satisfechoAmabilidadCajas= (this.cajas[0].amabilidad_satisfechos / this.cajas[0].total)*100,
        this.noSatisfechoAmabilidadCajas= (this.cajas[0].amabilidad_no_satisfechos / this.cajas[0].total)*100; 
        this.CajasBarChartData={
      labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
      datasets: [
        { data: [ this.noSatisfechoHorarioCajas, this.noSatisfechoDisponibilidadCajas, this.noSatisfechoAtencionCajas, this.noSatisfechoAmabilidadCajas], label: 'No satisfecho',backgroundColor:'rgba(87, 6, 12, 0.9)' },
        { data: [ this.satisfechoHorarioCajas, this.satisfechoDisponibilidadCajas, this.satisfechoAtencionCajas, this.satisfechoAmabilidadCajas], label: 'Satisfecho',backgroundColor:'rgba(155, 141, 65, 0.9)'  },
  
      ],
    }
      },
      
    );

    this.ticsService.dataCoordinadorDeCarreras().subscribe(
      data =>{this.coordinadorDeCarreras=data,this.dtTrigger,
        this.totalCoordinadorDeCarreras= ((this.coordinadorDeCarreras[0].total)),
        this.satisfechoHorarioCoordinadorDeCarreras= ((this.coordinadorDeCarreras[0].horario_satisfechos / this.coordinadorDeCarreras[0].total)*100),
        this.noSatisfechoHorarioCoordinadorDeCarreras= (this.coordinadorDeCarreras[0].horario_no_satisfechos / this.coordinadorDeCarreras[0].total)*100;
        this.satisfechoDisponibilidadCoordinadorDeCarreras= (this.coordinadorDeCarreras[0].disponibilidad_satisfechos / this.coordinadorDeCarreras[0].total)*100,
        this.noSatisfechoDisponibilidadCoordinadorDeCarreras= (this.coordinadorDeCarreras[0].disponibilidad_no_satisfechos / this.coordinadorDeCarreras[0].total)*100; 
        this.satisfechoAtencionCoordinadorDeCarreras= (this.coordinadorDeCarreras[0].atencion_satisfechos / this.coordinadorDeCarreras[0].total)*100,
        this.noSatisfechoAtencionCoordinadorDeCarreras= (this.coordinadorDeCarreras[0].atencion_no_satisfechos / this.coordinadorDeCarreras[0].total)*100;  
        this.satisfechoAmabilidadCoordinadorDeCarreras= (this.coordinadorDeCarreras[0].amabilidad_satisfechos / this.coordinadorDeCarreras[0].total)*100,
        this.noSatisfechoAmabilidadCoordinadorDeCarreras= (this.coordinadorDeCarreras[0].amabilidad_no_satisfechos / this.coordinadorDeCarreras[0].total)*100; 
        this.CoordinadorDeCarrerasBarChartData={
      labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
      datasets: [
        { data: [ this.noSatisfechoHorarioCoordinadorDeCarreras, this.noSatisfechoDisponibilidadCoordinadorDeCarreras, this.noSatisfechoAtencionCoordinadorDeCarreras, this.noSatisfechoAmabilidadCoordinadorDeCarreras], label: 'No satisfecho',backgroundColor:'rgba(87, 6, 12, 0.9)' },
        { data: [ this.satisfechoHorarioCoordinadorDeCarreras, this.satisfechoDisponibilidadCoordinadorDeCarreras, this.satisfechoAtencionCoordinadorDeCarreras, this.satisfechoAmabilidadCoordinadorDeCarreras], label: 'Satisfecho',backgroundColor:'rgba(155, 141, 65, 0.9)'  },
  
      ],
    }
      },
      
    );
    this.ticsService.dataBecas().subscribe(
      data =>{this.becas=data,this.dtTrigger,
        this.totalBecas= ((this.becas[0].total)),
        this.satisfechoHorarioBecas= ((this.becas[0].horario_satisfechos / this.becas[0].total)*100),
        this.noSatisfechoHorarioBecas= (this.becas[0].horario_no_satisfechos / this.becas[0].total)*100;
        this.satisfechoDisponibilidadBecas= (this.becas[0].disponibilidad_satisfechos / this.becas[0].total)*100,
        this.noSatisfechoDisponibilidadBecas= (this.becas[0].disponibilidad_no_satisfechos / this.becas[0].total)*100; 
        this.satisfechoAtencionBecas= (this.becas[0].atencion_satisfechos / this.becas[0].total)*100,
        this.noSatisfechoAtencionBecas= (this.becas[0].atencion_no_satisfechos / this.becas[0].total)*100;  
        this.satisfechoAmabilidadBecas= (this.becas[0].amabilidad_satisfechos / this.becas[0].total)*100,
        this.noSatisfechoAmabilidadBecas= (this.becas[0].amabilidad_no_satisfechos / this.becas[0].total)*100; 
        this.BecasBarChartData={
      labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
      datasets: [
        { data: [ this.noSatisfechoHorarioBecas, this.noSatisfechoDisponibilidadBecas, this.noSatisfechoAtencionBecas, this.noSatisfechoAmabilidadBecas], label: 'No satisfecho',backgroundColor:'rgba(87, 6, 12, 0.9)' },
        { data: [ this.satisfechoHorarioBecas, this.satisfechoDisponibilidadBecas, this.satisfechoAtencionBecas, this.satisfechoAmabilidadBecas], label: 'Satisfecho',backgroundColor:'rgba(155, 141, 65, 0.9)'  },
  
      ],
    }
      },
      
    );
    this.ticsService.dataCentroDeCopiado().subscribe(
      data =>{this.centroDeCopiado=data,this.dtTrigger,
        this.totalCentroDeCopiado= ((this.centroDeCopiado[0].total)),
        this.satisfechoHorarioCentroDeCopiado= ((this.centroDeCopiado[0].horario_satisfechos / this.centroDeCopiado[0].total)*100),
        this.noSatisfechoHorarioCentroDeCopiado= (this.centroDeCopiado[0].horario_no_satisfechos / this.centroDeCopiado[0].total)*100;
        this.satisfechoDisponibilidadCentroDeCopiado= (this.centroDeCopiado[0].disponibilidad_satisfechos / this.centroDeCopiado[0].total)*100,
        this.noSatisfechoDisponibilidadCentroDeCopiado= (this.centroDeCopiado[0].disponibilidad_no_satisfechos / this.centroDeCopiado[0].total)*100; 
        this.satisfechoAtencionCentroDeCopiado= (this.centroDeCopiado[0].atencion_satisfechos / this.centroDeCopiado[0].total)*100,
        this.noSatisfechoAtencionCentroDeCopiado= (this.centroDeCopiado[0].atencion_no_satisfechos / this.centroDeCopiado[0].total)*100;  
        this.satisfechoAmabilidadCentroDeCopiado= (this.centroDeCopiado[0].amabilidad_satisfechos / this.centroDeCopiado[0].total)*100,
        this.noSatisfechoAmabilidadCentroDeCopiado= (this.centroDeCopiado[0].amabilidad_no_satisfechos / this.centroDeCopiado[0].total)*100; 
        this.CentroDeCopiadoBarChartData={
      labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
      datasets: [
        { data: [ this.noSatisfechoHorarioCentroDeCopiado, this.noSatisfechoDisponibilidadCentroDeCopiado, this.noSatisfechoAtencionCentroDeCopiado, this.noSatisfechoAmabilidadCentroDeCopiado], label: 'No satisfecho',backgroundColor:'rgba(87, 6, 12, 0.9)' },
        { data: [ this.satisfechoHorarioCentroDeCopiado, this.satisfechoDisponibilidadCentroDeCopiado, this.satisfechoAtencionCentroDeCopiado, this.satisfechoAmabilidadCentroDeCopiado], label: 'Satisfecho',backgroundColor:'rgba(155, 141, 65, 0.9)'  },
  
      ],
    }
      },
      
    );

    this.ticsService.dataPsicologico().subscribe(
      data =>{this.psicologico=data,this.dtTrigger,
        this.totalPsicologico= ((this.psicologico[0].total)),
        this.satisfechoHorarioPsicologico= ((this.psicologico[0].horario_satisfechos / this.psicologico[0].total)*100),
        this.noSatisfechoHorarioPsicologico= (this.psicologico[0].horario_no_satisfechos / this.psicologico[0].total)*100;
        this.satisfechoDisponibilidadPsicologico= (this.psicologico[0].disponibilidad_satisfechos / this.psicologico[0].total)*100,
        this.noSatisfechoDisponibilidadPsicologico= (this.psicologico[0].disponibilidad_no_satisfechos / this.psicologico[0].total)*100; 
        this.satisfechoAtencionPsicologico= (this.psicologico[0].atencion_satisfechos / this.psicologico[0].total)*100,
        this.noSatisfechoAtencionPsicologico= (this.psicologico[0].atencion_no_satisfechos / this.psicologico[0].total)*100;  
        this.satisfechoAmabilidadPsicologico= (this.psicologico[0].amabilidad_satisfechos / this.psicologico[0].total)*100,
        this.noSatisfechoAmabilidadPsicologico= (this.psicologico[0].amabilidad_no_satisfechos / this.psicologico[0].total)*100; 
        this.PsicologicoBarChartData={
      labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
      datasets: [
        { data: [ this.noSatisfechoHorarioPsicologico, this.noSatisfechoDisponibilidadPsicologico, this.noSatisfechoAtencionPsicologico, this.noSatisfechoAmabilidadPsicologico], label: 'No satisfecho',backgroundColor:'rgba(87, 6, 12, 0.9)' },
        { data: [ this.satisfechoHorarioPsicologico, this.satisfechoDisponibilidadPsicologico, this.satisfechoAtencionPsicologico, this.satisfechoAmabilidadPsicologico], label: 'Satisfecho',backgroundColor:'rgba(155, 141, 65, 0.9)'  },
  
      ],
    }
      },
      
    );
    this.ticsService.dataMedico().subscribe(
      data =>{this.medico=data,this.dtTrigger,
        this.totalMedico= ((this.medico[0].total)),
        this.satisfechoHorarioMedico= ((this.medico[0].horario_satisfechos / this.medico[0].total)*100),
        this.noSatisfechoHorarioMedico= (this.medico[0].horario_no_satisfechos / this.medico[0].total)*100;
        this.satisfechoDisponibilidadMedico= (this.medico[0].disponibilidad_satisfechos / this.medico[0].total)*100,
        this.noSatisfechoDisponibilidadMedico= (this.medico[0].disponibilidad_no_satisfechos / this.medico[0].total)*100; 
        this.satisfechoAtencionMedico= (this.medico[0].atencion_satisfechos / this.medico[0].total)*100,
        this.noSatisfechoAtencionMedico= (this.medico[0].atencion_no_satisfechos / this.medico[0].total)*100;  
        this.satisfechoAmabilidadMedico= (this.medico[0].amabilidad_satisfechos / this.medico[0].total)*100,
        this.noSatisfechoAmabilidadMedico= (this.medico[0].amabilidad_no_satisfechos / this.medico[0].total)*100; 
        this.MedicoBarChartData={
      labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
      datasets: [
        { data: [ this.noSatisfechoHorarioMedico, this.noSatisfechoDisponibilidadMedico, this.noSatisfechoAtencionMedico, this.noSatisfechoAmabilidadMedico], label: 'No satisfecho',backgroundColor:'rgba(87, 6, 12, 0.9)' },
        { data: [ this.satisfechoHorarioMedico, this.satisfechoDisponibilidadMedico, this.satisfechoAtencionMedico, this.satisfechoAmabilidadMedico], label: 'Satisfecho',backgroundColor:'rgba(155, 141, 65, 0.9)'  },
  
      ],
    }
      },
      
    );

    this.ticsService.dataAsesoriasAcademicas().subscribe(
      data =>{this.asesoriasAcademicas=data,this.dtTrigger,
        this.totalAsesoriasAcademicas= ((this.asesoriasAcademicas[0].total)),
        this.satisfechoHorarioAsesoriasAcademicas= ((this.asesoriasAcademicas[0].horario_satisfechos / this.asesoriasAcademicas[0].total)*100),
        this.noSatisfechoHorarioAsesoriasAcademicas= (this.asesoriasAcademicas[0].horario_no_satisfechos / this.asesoriasAcademicas[0].total)*100;
        this.satisfechoDisponibilidadAsesoriasAcademicas= (this.asesoriasAcademicas[0].disponibilidad_satisfechos / this.asesoriasAcademicas[0].total)*100,
        this.noSatisfechoDisponibilidadAsesoriasAcademicas= (this.asesoriasAcademicas[0].disponibilidad_no_satisfechos / this.asesoriasAcademicas[0].total)*100; 
        this.satisfechoAtencionAsesoriasAcademicas= (this.asesoriasAcademicas[0].atencion_satisfechos / this.asesoriasAcademicas[0].total)*100,
        this.noSatisfechoAtencionAsesoriasAcademicas= (this.asesoriasAcademicas[0].atencion_no_satisfechos / this.asesoriasAcademicas[0].total)*100;  
        this.satisfechoAmabilidadAsesoriasAcademicas= (this.asesoriasAcademicas[0].amabilidad_satisfechos / this.asesoriasAcademicas[0].total)*100,
        this.noSatisfechoAmabilidadAsesoriasAcademicas= (this.asesoriasAcademicas[0].amabilidad_no_satisfechos / this.asesoriasAcademicas[0].total)*100; 
        this.AsesoriasAcademicasBarChartData={
      labels: [ 'Horario', 'Disponibilidad', 'Atención', 'Amabilidad'],
      datasets: [
        { data: [ this.noSatisfechoHorarioAsesoriasAcademicas, this.noSatisfechoDisponibilidadAsesoriasAcademicas, this.noSatisfechoAtencionAsesoriasAcademicas, this.noSatisfechoAmabilidadAsesoriasAcademicas], label: 'No satisfecho',backgroundColor:'rgba(87, 6, 12, 0.9)' },
        { data: [ this.satisfechoHorarioAsesoriasAcademicas, this.satisfechoDisponibilidadAsesoriasAcademicas, this.satisfechoAtencionAsesoriasAcademicas, this.satisfechoAmabilidadAsesoriasAcademicas], label: 'Satisfecho',backgroundColor:'rgba(155, 141, 65, 0.9)'  },
  
      ],
    }
      },
      
    );

  }
  
}