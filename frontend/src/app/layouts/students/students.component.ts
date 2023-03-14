import { Component, OnInit } from '@angular/core';
import { faHome, faPhone } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
 home = faHome;
 phone = faPhone;
  constructor() { }

  


  ngOnInit(): void {
  }

}
