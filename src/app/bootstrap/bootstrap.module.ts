import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { TableComponent } from './pages/table/table.component';
import { BootstrapRoutingModule } from './bootstrap-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    BootstrapRoutingModule
  ]
})
export class BootstrapModule { }
