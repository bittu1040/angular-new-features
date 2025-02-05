import { Component } from '@angular/core';
import { MathService } from '../math.service';

@Component({
  selector: 'app-unit-test',
  imports: [],
  templateUrl: './unit-test.component.html',
  styleUrl: './unit-test.component.scss'
})
export class UnitTestComponent {

  count = 0;
  result = 0;

  constructor(private mathService: MathService) {}

  calculate() {
    this.result = this.mathService.add(4, 3);
  }

  increment() {
    this.count++;
  }

}
