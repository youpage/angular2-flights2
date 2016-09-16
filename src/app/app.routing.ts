import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }     from './home/home.component';
import { FlightsComponent }   from './flights/flights.component';
import { FlightDetails }     from './flights/flight.details';


const app_routes: Routes = [
  { path: '',  pathMatch:'full', redirectTo: '/home' },
  { path: 'home',  component: HomeComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'flights/:id', component: FlightDetails },

];

export const app_routing = RouterModule.forRoot(app_routes);