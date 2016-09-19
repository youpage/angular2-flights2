import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// application component
import { AppComponent } from './app.component';
// sigleton objects
import { CoreModule } from './core/index';
// routing
import { AppRouting } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRouting,
    CoreModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }