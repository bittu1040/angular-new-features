import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InitialContentComponent } from './initial-content/initial-content.component';
import { FirstDeferredComponent } from './first-deferred/first-deferred.component';
import { SecondDeferredComponent } from './second-deferred/second-deferred.component';

@Component({
  selector: 'app-root',
  imports: [InitialContentComponent, FirstDeferredComponent, SecondDeferredComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-new-features';
  constructor() {
    console.log('🚀 App loaded at:', new Date().toLocaleTimeString());
  }
}
