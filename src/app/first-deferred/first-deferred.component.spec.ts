import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDeferredComponent } from './first-deferred.component';

describe('FirstDeferredComponent', () => {
  let component: FirstDeferredComponent;
  let fixture: ComponentFixture<FirstDeferredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstDeferredComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstDeferredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
