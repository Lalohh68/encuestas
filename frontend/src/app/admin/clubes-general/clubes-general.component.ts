import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clubes-general',
  templateUrl: './clubes-general.component.html',
  styleUrls: ['./clubes-general.component.scss']
})
export class ClubesGeneralComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      paging: false,
      ordering: false,
      info: false,
      searching:false,
      responsive:false,
      scrollX: true,
    };
  }

}
