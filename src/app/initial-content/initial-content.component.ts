import { Component } from '@angular/core';

@Component({
  selector: 'app-initial-content',
  imports: [],
  templateUrl: './initial-content.component.html',
  styleUrl: './initial-content.component.scss'
})
export class InitialContentComponent {

  constructor() {
    console.log('📦 Initial Component loaded at:', new Date().toLocaleTimeString());
  }
}
