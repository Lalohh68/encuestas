import { Component, Input, OnInit } from '@angular/core';
import { INavbarData } from './helper';

@Component({
  selector: 'app-sublevel-menu',
  template: `
    <p>
      sublevel-menu works!
    </p>
  `,
  styleUrls: ['sidebar.component.scss']
})
export class SublevelMenuComponent implements OnInit {
  @Input()data:INavbarData={
    routeLink:"",
    icon:"",
    label:"",
    items:[]
  }
  @Input() collapsed = false
  @Input() animating: boolean | undefined;
  @Input() expended: boolean | undefined;
  @Input() multiple: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}
