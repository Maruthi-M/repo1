import { Component } from '@angular/core';

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
      Parent: {{ myCount }}
      <counter
        [count]="myCount"
        (change)="countChange($event)">
      </counter>
    </div>
  ` 
})
export class AppComponent {
  myCount: number = 10;
  countChange(event) {
    this.myCount = event;
  }
}