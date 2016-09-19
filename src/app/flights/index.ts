// Flights Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// components
import { FlightsComponent } from './flights.component';
import { FlightsListComponent } from './flights.list.component';
import { FlightItem } from './flight.item';
import { FlightDetails } from './flight.details';

// pipes
import { CheckNull } from './pipes/flight.checkNull';
import { FlightNumberFilter } from './pipes/flight.NumberFilter';
import { FlightPriceFilter } from './pipes/flight.PriceFilter';

// routing
import { FlightsRouting } from './flights.routing';

@NgModule({
  imports: [ CommonModule, FormsModule, FlightsRouting ],
  declarations: [ FlightsComponent, FlightsListComponent, FlightItem, FlightDetails, FlightPriceFilter, FlightNumberFilter, CheckNull ],
  exports: [CommonModule, FormsModule, FlightsComponent, FlightsListComponent, FlightItem, FlightDetails, FlightPriceFilter, FlightNumberFilter, CheckNull ]
})
export default class AppModule { }