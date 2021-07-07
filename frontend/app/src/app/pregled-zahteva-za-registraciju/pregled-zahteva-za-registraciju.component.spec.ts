import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledZahtevaZaRegistracijuComponent } from './pregled-zahteva-za-registraciju.component';

describe('PregledZahtevaZaRegistracijuComponent', () => {
  let component: PregledZahtevaZaRegistracijuComponent;
  let fixture: ComponentFixture<PregledZahtevaZaRegistracijuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregledZahtevaZaRegistracijuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregledZahtevaZaRegistracijuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
