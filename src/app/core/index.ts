import { NgModule, Optional, SkipSelf } from '@angular/core';

import { DataService } from './data.service';
import { ModuleGuard } from './module.guard';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [ DataService ],
})

export class CoreModule extends ModuleGuard { //Ensure that CoreModule is only loaded into AppModule

    //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        super(parentModule);
    }

}
