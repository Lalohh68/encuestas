import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})


export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts) {}

}
