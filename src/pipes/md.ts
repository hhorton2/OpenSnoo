import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the Md pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'md'
})
@Injectable()
export class Md {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value, args) {
    value = value + ''; // make sure it's a string
    let parser = new DOMParser;
    let dom = parser.parseFromString(
      '<!doctype html><body>' + value,
      'text/html');
    value = dom.body.textContent;
    return value;
  }
}
