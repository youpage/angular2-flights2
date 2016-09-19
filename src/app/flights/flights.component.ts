import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'flights.view.html'
})
export class FlightsComponent implements OnInit {

    public scroll: boolean = false;

    constructor() {
        
    }

    ngOnInit() { }
}