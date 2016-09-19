import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const baseApi: string = './api/';

@Injectable()
export class DataService {

    constructor(private http: Http) { }    

    /**
     * retreive data from API
     * 
     * @param {string} url
     * @returns {Observable<any[]>}
     * 
     * @memberOf DataService
     */
    getAll(url: string): Observable<any[]> {
        return this.http.get(baseApi + url)
            .map((res: Response) => {
                let data = res.json();
                return data;
            })
            .catch(this.handleError);

    }

    /**
     * retreive data by id from API
     * 
     * @param {string} url
     * @param {*} id
     * @returns {Observable<any>}
     * 
     * @memberOf DataService
     */
    getById(url: string, id: any): Observable<any> {
        return this.http.get(baseApi + url + '/' + id)
            .map((res: Response) => {
                let data = res.json();
                return data;
            })
            .catch(this.handleError);
    }


    /**
     * insert data object if no obj.id
     * update data object if obj.id
     * 
     * @param {string} url
     * @param {*} obj
     * @returns {Observable<number>}
     * 
     * @memberOf DataService
     */
    addObject(url: string, obj: any): Observable<number> {
        if (!obj.id) {
            return this.http.post(baseApi + url, JSON.stringify(obj), this.getJsonRequestOptions())
                .map((res: Response) => {
                    return +res.json(); // receive the inserted ID: number
                })
                .catch(this.handleError);
        } else {
            return this.http.put(baseApi + url + '/' + obj.id, JSON.stringify(obj), this.getJsonRequestOptions())
                .map((res: Response) => {
                    return res.json();
                })
                .catch(this.handleError);
        }
    }

    /**
     * delete data object by obj.id
     * 
     * @param {string} url
     * @param {*} obj
     * @returns
     * 
     * @memberOf DataService
     */
    deleteObject(url: string, obj: any) {
        if (obj.id) {
            return this.http.delete(baseApi + url + '/' + obj.id, this.getJsonRequestOptions())
                .map((response: Response) => {
                    return response.json();
                })
                .catch(this.handleError);
        } else {
            return this.createObservable('Object must contain an unique identifier');
        }
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

    private getJsonRequestOptions(): RequestOptions {
        let headers = new Headers({ 'content-type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return options;
    }

}