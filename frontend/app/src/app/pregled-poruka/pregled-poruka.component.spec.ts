import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledPorukaComponent } from './pregled-poruka.component';

describe('PregledPorukaComponent', () => {
  let component: PregledPorukaComponent;
  let fixture: ComponentFixture<PregledPorukaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregledPorukaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregledPorukaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
