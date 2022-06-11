import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() color: 'light' | 'dark' | 'primary' | ' secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link' = 'light'
  @Input() hover = false;
  @Input() border = false;
  @Input() striped = false;

  @Input() dataTable: any[] = [];

  headers?: any[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.headers = Object.keys(this.dataTable[0]);
  }

}
