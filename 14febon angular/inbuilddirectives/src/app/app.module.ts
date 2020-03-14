import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { EmployeeComponent } from './employee.component';
import { Myapp1comp1Component } from './myapp1comp1/myapp1comp1.component';
@NgModule({
  declarations: [
    AppComponent
,EmployeeComponent, Myapp1comp1Component   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
