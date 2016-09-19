import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }   from './home.component';

const home_routes: Routes = [
  { 
    path: '', 
    component: HomeComponent
  }
];

export const HomeRouting = RouterModule.forChild(home_routes);