import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }

  add(a: number,b: number){
    return Number(a)+ Number(b);
  }

  substract(a:number, b: number){
    return a-b;
  }
}
