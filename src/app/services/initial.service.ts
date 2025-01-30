import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitialService {

  constructor() { }

  initialize(){
    console.log("initialize service  ")
    return of([1,2,3])
  }
}
