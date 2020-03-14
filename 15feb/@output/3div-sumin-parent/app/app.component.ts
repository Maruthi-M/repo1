import { Component } from '@angular/core';
import {Mcounter} from './counter.component';

@Component({
  selector: 'app-root',
  styles: [`
    .app {
      display: block;
      text-align: center;
      padding: 25px;
      background: #f5f5f5;
    }
  `],
  template: `
    <div class="app">
      Parent: {{ parent }}
      <counter
        
        (change)="countChange($event)">
      </counter>
      <counter
        
        (change)="countChange($event)">
      </counter>
      <counter
        
        (change)="countChange($event)">
      </counter>
    </div>
  ` 
})
export class AppComponent {
  //myCount: number = 10;
  parent:number=0;
  countChange(event) {
    this.parent = this.parent+event.count;
  }
}
/* template code after parent.....*/