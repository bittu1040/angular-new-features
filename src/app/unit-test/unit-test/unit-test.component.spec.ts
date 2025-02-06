import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestComponent } from './unit-test.component';
import { FormsModule } from '@angular/forms';
import { MathService } from '../math.service';

describe('UnitTestComponent', () => {
  let component: UnitTestComponent;
  let fixture: ComponentFixture<UnitTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitTestComponent, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase the count on button click', ()=>{
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges(); // UI update
    expect(component.count).toBe(1);
  });

  it('should calculate sum using mathService', ()=>{
    component.calculate();
    expect(component.result).toBe(7);
  });

  it('should add two number with user input', ()=>{
    component.number1 = 5;
    component.number2 = 6;
    component.add();
    expect(component.result1).toBe(11);
  });


  // revit this and see how to mock service, is there any other way to mock service

  // it('should calculate sum using mocked mathService', ()=>{
  //   const mathService = fixture.debugElement.injector.get(MathService);
  //   spyOn(mathService, 'add').and.returnValue(10);
  //   component.calculate();
  //   expect(component.result).toBe(10);
  // });

  
});
