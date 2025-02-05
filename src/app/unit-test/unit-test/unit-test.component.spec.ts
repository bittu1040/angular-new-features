import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestComponent } from './unit-test.component';

describe('UnitTestComponent', () => {
  let component: UnitTestComponent;
  let fixture: ComponentFixture<UnitTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitTestComponent]
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
  })
});
