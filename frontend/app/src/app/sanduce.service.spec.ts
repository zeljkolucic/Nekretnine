import { TestBed } from '@angular/core/testing';

import { SanduceService } from './sanduce.service';

describe('SanduceService', () => {
  let service: SanduceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SanduceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
