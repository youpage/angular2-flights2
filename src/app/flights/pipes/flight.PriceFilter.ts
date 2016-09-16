import {Pipe, PipeTransform} from '@angular/core';
import {IFlight}  from '../interfaces';

@Pipe({
    name: 'flightPriceFilter'
})
export class FlightPriceFilter implements PipeTransform {
    transform(flights: IFlight[], args: any): any {
        return flights.filter(
            (fl: IFlight) => {
                if (args) {
                    let price = fl.prices.adult.value;
                    return price <= args;
                } else
                    return true;
            }
        );
    }
}