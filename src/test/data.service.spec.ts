import { inject, async, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ConnectionBackend, Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { DataService } from '../app/shared/data.service';
import { IFlight } from '../app/flights/interfaces';

describe('Service: data service API request tests', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }, deps: [MockBackend, BaseRequestOptions]
                },
                { provide: DataService, useClass: DataService },
                { provide: MockBackend, useClass: MockBackend },
                { provide: BaseRequestOptions, useClass: BaseRequestOptions }
            ]
        });
    });

    it('should retrieve all flights results',
        inject([DataService, MockBackend], fakeAsync((dataService: DataService, mockBackend: MockBackend) => {
            let res: IFlight[];
            mockBackend.connections.subscribe((c:any) => {
                expect(c.request.url).toBe('./api/flights.json');
                let response = new ResponseOptions({ body: '[{"id": "EZ001"}, {"id": "EZ002"}]' });
                c.mockRespond(new Response(response));
            });
            dataService.getFlights().subscribe((response:IFlight[]) => {
                res = response;
            });
            tick();
            expect(res[0].id).toBe('EZ001');
        }))
    );

    it('should retrieve the flight by id',
        inject([DataService, MockBackend], fakeAsync((dataService: DataService, mockBackend: MockBackend) => {
            let res: IFlight;
            mockBackend.connections.subscribe((c:any) => {
                expect(c.request.url).toBe('./api/flights.json');
                let response = new ResponseOptions({ body: '[{"id": "EZ001", "departureAirportCode": "LGW"}, {"id": "EZ002", "departureAirportCode": "SXF"}]' });
                c.mockRespond(new Response(response));
            });
            dataService.getFlight('EZ001').subscribe((response:any) => {
                res = response;
            });
            tick();
            expect(res[1].departureAirportCode).toBe('SXF');
        }))
    );
});