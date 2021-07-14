import { TestBed } from '@angular/core/testing';

import { RegistrovaniKorisnikGuard } from './registrovani-korisnik.guard';

describe('RegistrovaniKorisnikGuard', () => {
  let guard: RegistrovaniKorisnikGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RegistrovaniKorisnikGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
