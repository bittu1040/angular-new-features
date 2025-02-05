import { TestBed } from '@angular/core/testing';

import { PollingService } from './polling.service';
import { HttpClientTestingModule, provideHttpClientTesting } from '@angular/common/http/testing';

describe('PollingService', () => {
  let service: PollingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PollingService]
    });
    service = TestBed.inject(PollingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
