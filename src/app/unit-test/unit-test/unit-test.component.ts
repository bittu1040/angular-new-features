import { Component } from '@angular/core';

@Component({
  selector: 'app-unit-test',
  imports: [],
  templateUrl: './unit-test.component.html',
  styleUrl: './unit-test.component.scss'
})
export class UnitTestComponent {

  count = 0;
  increment() {
    this.count++;
  }

}
