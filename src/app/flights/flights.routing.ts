import { Routes, RouterModule } from '@angular/router';

import { FlightsComponent } from './flights.component';
import { FlightsListComponent } from './flights.list.component';
import { FlightDetails } from './flight.details';

const flights_routes: Routes = [
  {
    path: '',
    component: FlightsComponent,
    children: [
      { path: '', component: FlightsListComponent },
      { path: ':id', component: FlightDetails },
      
    ]
  }
];

export const FlightsRouting = RouterModule.forChild(flights_routes);