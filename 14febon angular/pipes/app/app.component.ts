import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})


export class AppComponent {
  str1:string
  str2:string
color:string
size:number
//visible:boolean
fontstyle:string;
//displayText:string
constructor() { 
    this.color = 'pink';
    this.size = 16;
    this.fontstyle='normal';
   // this.displayText = 'show-class';
    //this.visible = true;
    this.str1="string";
    this.str2="string2";
  }
toggle() {
    //this.visible = !this.visible;
   // this.displayText = this.visible ? 'show-class' : 'hide-class';
  }

}