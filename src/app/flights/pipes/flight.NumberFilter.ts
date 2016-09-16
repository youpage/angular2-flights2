import { Pipe, PipeTransform } from '@angular/core';
import {IFlight}  from '../interfaces';

@Pipe({
    name: 'flightNumberFilter'
})

export class FlightNumberFilter implements PipeTransform {
    transform(flights: IFlight[], args: any): any {
        return flights.filter(
            (fl: IFlight) => {
                if (args) {
                    let id = fl.flightNumber.number+'';
                    return id.indexOf(args) !== -1;
                } else
                    return true;
            }
        );
    }
}