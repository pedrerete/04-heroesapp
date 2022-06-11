import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any[] = [
    {
      id: 1,
      name: 'John',
      lastname: 'Doe',
      age: 30
    },
    {
      id: 2,
      name: 'Jane',
      lastname: 'Doe',
      age: 25
    }
    ,
    {
      id: 3,
      name: 'uno',
      lastname: 'dos',
      age: 100
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
