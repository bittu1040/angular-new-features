import { Component } from '@angular/core';
import { MathService } from '../math.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-unit-test',
  imports: [FormsModule],
  templateUrl: './unit-test.component.html',
  styleUrl: './unit-test.component.scss'
})
export class UnitTestComponent {

  count = 0;
  result = 0;
  result1 = 0;

  number1: number=4;
  number2: number=5;

  constructor(private mathService: MathService) {}

  calculate() {
    this.result = this.mathService.add(4, 3);
  }

  increment() {
    this.count++;
  }

  add(){
    this.result1 = this.mathService.add(this.number1, this.number2);
  }

}
