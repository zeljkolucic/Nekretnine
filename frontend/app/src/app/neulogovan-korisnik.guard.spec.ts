import { TestBed } from '@angular/core/testing';

import { NeulogovanKorisnikGuard } from './neulogovan-korisnik.guard';

describe('NeulogovanKorisnikGuard', () => {
  let guard: NeulogovanKorisnikGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NeulogovanKorisnikGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
