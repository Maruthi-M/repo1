import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { HelpComponent } from './help.component';
import { AboutComponent1 } from './about.component.1';
import {NewComponent1} from './newcomponent1'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AboutComponent,
    HomeComponent,
    AboutComponent1,
    HelpComponent,
    AppComponent,
    NewComponent1
    
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
