import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondDeferredComponent } from './second-deferred.component';

describe('SecondDeferredComponent', () => {
  let component: SecondDeferredComponent;
  let fixture: ComponentFixture<SecondDeferredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondDeferredComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondDeferredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
