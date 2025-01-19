import { Component } from '@angular/core';

@Component({
  selector: 'app-first-deferred',
  imports: [],
  templateUrl: './first-deferred.component.html',
  styleUrl: './first-deferred.component.scss'
})
export class FirstDeferredComponent {

  constructor() {
    console.log('🎯 First Deferred Component loaded at:', new Date().toLocaleTimeString());
  }
}
