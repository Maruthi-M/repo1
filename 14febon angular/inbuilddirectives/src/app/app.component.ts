import { Component } from '@angular/core';
import { User } from './users';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
count=0;
isValid = true;
ids = [1,2,3,4,5,6,7,8,9];
title = 'app';

	users = [
      new User('Mahesh', 20,'mahesh@gmail.com'),
      new User('Krishna', 22,'krishna@gmail.com'),
      new User('Narendra', 31,'narendhra@gmail.com')
    ];
    click()
    {
      /*if(this.isValid)
      {
        this.isValid=false;
      }
      else{
        this.isValid=true;
      }*/
      this.count++;
     //this.isValid=!this.isValid;
      this.isValid?this.isValid=false:this.isValid=true;
      
    }

 }

