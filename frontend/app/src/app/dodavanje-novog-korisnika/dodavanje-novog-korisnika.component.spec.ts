import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodavanjeNovogKorisnikaComponent } from './dodavanje-novog-korisnika.component';

describe('DodavanjeNovogKorisnikaComponent', () => {
  let component: DodavanjeNovogKorisnikaComponent;
  let fixture: ComponentFixture<DodavanjeNovogKorisnikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodavanjeNovogKorisnikaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DodavanjeNovogKorisnikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
