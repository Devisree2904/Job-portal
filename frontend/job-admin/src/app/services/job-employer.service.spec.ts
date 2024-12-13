import { TestBed } from '@angular/core/testing';

import { JobEmployerService } from './job-employer.service';

describe('JobEmployerService', () => {
  let service: JobEmployerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobEmployerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
