import { Routes } from '@angular/router';

import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { HelpComponent } from './help.component';
import { AboutComponent1} from './about.component.1';
import {NewComponent1} from './newcomponent1';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'help', component: HelpComponent },
  { path: 'security', component: AboutComponent1 },
  { path: 'info', component:NewComponent1 }
];
