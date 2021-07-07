import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledKorisnikaSistemaComponent } from './pregled-korisnika-sistema.component';

describe('PregledKorisnikaSistemaComponent', () => {
  let component: PregledKorisnikaSistemaComponent;
  let fixture: ComponentFixture<PregledKorisnikaSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregledKorisnikaSistemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregledKorisnikaSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
