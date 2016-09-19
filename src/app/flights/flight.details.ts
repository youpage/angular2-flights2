import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../core/data.service';
import { IFlight, URLPATH } from './interfaces';

@Component({
    moduleId: module.id,
    templateUrl: 'flight.details.view.html'
})
export class FlightDetails implements OnInit {

    public flight: IFlight = null;
    public flight_error: Boolean = false;

    private sub: Subscription;

    constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) { }

    ngOnInit() {
        this.getFlight();
    }

    getFlight() {
        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            this.dataService.getAll(URLPATH).subscribe(
                (data: any) => {
                    //since we don't get the single flight from the API we look it up here                   
                    let flights = data;
                    this.flight = data.find((fl: IFlight) => fl.id === id);
                },
                (err: any) => { this.flight_error = true }
            )
        });
    }

    backToSearch() {
        this.router.navigate(['/flights']);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}