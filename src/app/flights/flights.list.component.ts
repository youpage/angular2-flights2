import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { IFlight, URLPATH } from './interfaces';

declare var event: any; // trick to bybass TS validation

@Component({
    moduleId: module.id,
    selector: 'app-flights',
    templateUrl: 'flights.list.view.html',   
})
export class FlightsListComponent implements OnInit {

    public flights: IFlight[] = [];
    public flights_error: Boolean = false;    

    public flPrice: any; //dual binding

    constructor(private dataService: DataService) {
        
    }

    ngOnInit() {
        this.getFlights();
    }

    getFlights() {
        //subscribe to the data service
        this.dataService.getAll(URLPATH).subscribe(
            data => {
                this.flights = data;
                let lower = this.getLowerPrice(data);
                let higher = this.getHigherPrice(data);
                this.flights.map(item => {
                    let price = item.prices.adult.value;
                    if (price === lower)
                        item.lower = true;
                    if (price === higher)
                        item.higher = true;
                });
            },
            err => { this.flights_error = true }
        )
    }

    getLowerPrice(data: any): any {
        return data.reduce(function (min: any, arr: any) {
            return min <= arr.prices.adult.value ? min : arr.prices.adult.value;
        }, Infinity);
    }

    getHigherPrice(data: any): any {
        return data.reduce(function (max: any, arr: any) {
            return max >= arr.prices.adult.value ? max : arr.prices.adult.value;
        }, -Infinity);
    }

    public alertDemo(message: string) {
        window.alert(message);
    }

    public onlyNumbers() {
        let key = event.keyCode || event.charCode;
        if (key != 37 && key != 39 && this.flPrice)
            this.flPrice = this.flPrice.replace(/[^\d]/g, '');
    }

}