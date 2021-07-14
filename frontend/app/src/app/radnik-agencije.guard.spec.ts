import { TestBed } from '@angular/core/testing';

import { RadnikAgencijeGuard } from './radnik-agencije.guard';

describe('RadnikAgencijeGuard', () => {
  let guard: RadnikAgencijeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RadnikAgencijeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
