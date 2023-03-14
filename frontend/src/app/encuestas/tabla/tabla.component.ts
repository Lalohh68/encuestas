import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  Servicio: string;
  alumnos:number;
  position: number;
  satisfaccion: number;
  insatisfaccion: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, Servicio: 'servicios escolares', satisfaccion: 93.5, insatisfaccion: 6.5, alumnos:473},
  {position: 2, Servicio: 'tutorias', satisfaccion: 95, insatisfaccion: 5, alumnos:558},
  {position: 3, Servicio: 'biblioteca', satisfaccion: 91, insatisfaccion: 9, alumnos:667},
  {position: 4, Servicio: 'idiomas', satisfaccion: 85, insatisfaccion: 15, alumnos:325},

];

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})

export class TablaComponent implements OnInit {
  displayedColumns: string[] = ['position','alumnos', 'Servicio', 'satisfaccion', 'insatisfaccion'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
