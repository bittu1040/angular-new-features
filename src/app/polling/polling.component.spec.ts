import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollingComponent } from './polling.component';
import { PollingService } from '../services/polling.service';
import { HttpClientTestingModule, provideHttpClientTesting } from '@angular/common/http/testing';

describe('PollingComponent', () => {
  let component: PollingComponent;
  let fixture: ComponentFixture<PollingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, PollingComponent],
      providers: [PollingService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
