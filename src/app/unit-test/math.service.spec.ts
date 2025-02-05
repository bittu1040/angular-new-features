import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';

describe('MathService', () => {
  let service: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two number correctly', ()=>{
    expect(service.add(1,2)).toBe(3);
  });

  it('should substract two number correctly', ()=>{
    expect(service.substract(3,2)).toBe(1)
  })
});
