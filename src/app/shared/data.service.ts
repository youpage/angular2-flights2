import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IFlight} from '../flights/interfaces';

const url: string = './api/flights.json'; 

@Injectable()
export class DataService {

    flights: IFlight[];

    constructor(private http: Http) { }

    getProjectName() {
        return 'Angular 2 Flights';
    }

    // get Flights API - will return an Observable
    getFlights(): Observable<IFlight[]> {
        if (!this.flights) {
            return this.http.get(url).map(
                (res: Response) => {
                    this.flights = res.json();
                    return this.flights;
                })
                .catch(this.handleError);
        } else {
            //return cached data
            return this.createObservable(this.flights);
        }
    }

    // get Flight by ID API - no API available, so we call the same getFlights() and deal with the id in the component
    getFlight(id: string): any {
        if (!this.flights)
            return this.getFlights();
        //return cached data
        return this.createObservable(this.flights);    
    }

    private createObservable(data: any): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next(data);
            observer.complete();
        });
    }

    private handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}