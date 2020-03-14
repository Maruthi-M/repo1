import { Component } from '@angular/core';
import {FilterData} from './filterData';
@Component({
  selector: 'app-root',
	template: `
	<input type="text" #filter (keyup)="0"><br>
	<table border=1>
	<tr><th>ITEMS LIST</th></tr>
	<tr *ngFor="let point of (points | filterData: filter.value)">
	<td>{{point}}</td>
	</tr>
	</table>
	 `
})

export class AppComponent {
	points: string[] = [
		 'tv-LG',
		 'tv-LG12',
		 'tv-SONY',
		 'tv-SONY3',
		 'tv',
		 'ac-LG',
		 'ac-SONY' 
	];
}
//selector:remove-spaces-impl
/*----------------in template <input type="text" #filter (keyup)="0">
	<ul>
	<li *ngFor="let point of (points | filterData: filter.value)">
	{{point}}
	</li>
	</ul>*/