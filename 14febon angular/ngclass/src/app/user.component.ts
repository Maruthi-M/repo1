import {Component} from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './user.component.html', 
    styleUrls: ['./user.component.css']
})
export class UserComponent {
	count=0;
	myclass;
	users = [
         'Mahesh',
         'Krishna',
         'Narendra',
	 'Jitendra'
    ];
	getCSSClasses(flag:string) {
	  let cssClasses;
	  if(flag == 'nightMode') {  
        cssClasses = {
	       'one': true,
		   'two': true 
	    }	
	  } else {  
        cssClasses = {
	       'two': true,
		   'four': false 
	    }	
	  }
	  return cssClasses;
	}	
	csschange()
	{
		this.count++;
		switch(this.count)
		{
			case 1:
				this.myclass='one';
				break;
				case 2:
					this.myclass='two';
					break;
					case 3:
					this.myclass='three';
					break;
					case 4:
					this.myclass='four';
					break;
					case 5:
					this.myclass={'five':true};
					break;
					default:
						this.myclass="one";

		}
	}


 }
  