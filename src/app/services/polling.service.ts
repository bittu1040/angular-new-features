import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollingService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

  constructor(private http: HttpClient) { }
  
  startPolling(intervalTime: number) {
    return interval(intervalTime).pipe(
      switchMap(() => this.http.get(this.apiUrl))
    );
  }

  // switchmap ensures that 
  // Each new interval emission cancels the previous HTTP request and starts a new one, 
  // ensuring that only one request is active at any given time.
}
