import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'code-app';
  para1="hi welcome to angular";
  i=0;
  j=0;
  k=0;
  increfun()
  {
   this.i++;
    console.log("incre");
  }
  decrefun()
  {
    this.i--;
    console.log("decre");
  }
  increfun1()
  {
   this.j++;

  }
  decrefun1()
  {
    this.j--;
  }
  increfun2()
  {
   this.k++;
  }
  decrefun2()
  {
    this.k--;
  }
}
