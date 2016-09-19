import { Component, OnInit } from '@angular/core';

import { APPNAME } from './interfaces';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.template.html'
})
export class HomeComponent implements OnInit {
    
    projectName: string;

    constructor() { }

    ngOnInit() { 
        this.projectName = APPNAME;
    }

}