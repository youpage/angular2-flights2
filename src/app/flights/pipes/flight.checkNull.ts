import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'checkNull'
})

// just for fun
// for the NULL on infant price
// in real life we'll check for data in the model

export class CheckNull implements PipeTransform {
    transform(value: any): any {
        return value === null ? 'N/A' : value;
    }
}