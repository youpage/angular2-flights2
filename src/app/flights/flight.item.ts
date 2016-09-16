import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {IFlight}  from './interfaces';

@Component({
    moduleId: module.id,
    selector: 'flight',
    templateUrl: 'flight.item.view.html'    
})
export class FlightItem implements OnInit {

    @Input()
    item: IFlight = null;
    constructor(private router: Router) { }

    public diffDay: boolean;

    ngOnInit() {
        if (this.item) {
            let arr = new Date(this.item.localArrivalTime);
            let dep = new Date(this.item.localDepartureTime);
            this.item.flightDuration = this.secondsToHHMMSS(arr.getTime() - dep.getTime());
            this.diffDay = this.isDiffDay(arr, dep);
        }
    }

    secondsToHHMMSS(time: any): string {
        //time = new Date(time);
        let sec: number = time / 1000 / 60;
        let min: number = sec % 60;
        let hr: number = (sec - min) / 60;
        let minFormat: string = min.toString().length > 1 ? "" + min : "0" + min;
        return `${hr}h:${minFormat}m`;
    }

    isDiffDay(arr: Date, dep: Date):boolean {
        return arr.toString().substring(0, 10) === dep.toString().substring(0, 10) ? false : true;
    }

    showDetails(flight:IFlight){
         this.router.navigate(['/flights', flight.id]);
    }
}