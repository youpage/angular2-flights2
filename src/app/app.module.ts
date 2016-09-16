import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
// components
import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightItem } from './flights/flight.item';
import { FlightDetails } from './flights/flight.details';
// data service
import { DataService } from './shared/data.service';
// pipes
import { CheckNull } from './flights/pipes/flight.checkNull';
import { FlightNumberFilter } from './flights/pipes/flight.NumberFilter';
import { FlightPriceFilter } from './flights/pipes/flight.PriceFilter';

import { app_routing } from './app.routing';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, app_routing],
  declarations: [AppComponent, HomeComponent, FlightsComponent, FlightItem, FlightDetails, FlightPriceFilter, FlightNumberFilter, CheckNull],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }