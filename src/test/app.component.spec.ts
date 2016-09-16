import { async, inject } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { AppComponent } from '../app/app.component';


describe('App: Flights Search', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppComponent]
    });
  });

  it('should create the app',
    inject([AppComponent], (app: AppComponent) => {
      expect(app).toBeTruthy();
    }));

  it('should have the title "Flights Search" ',
    inject([AppComponent], (app: AppComponent) => {
      expect(app.title).toEqual('Flights Search');
    }));
});