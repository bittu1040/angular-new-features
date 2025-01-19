import { Component } from '@angular/core';

@Component({
  selector: 'app-second-deferred',
  imports: [],
  templateUrl: './second-deferred.component.html',
  styleUrl: './second-deferred.component.scss'
})
export class SecondDeferredComponent {

  constructor() {
    console.log('🎯 Second Deferred Component loaded at:', new Date().toLocaleTimeString());
  }
}
