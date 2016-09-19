// Home Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';

@NgModule({
    imports: [ CommonModule, HomeRouting ],
    declarations: [ HomeComponent ]
})
export default class AppModule { }