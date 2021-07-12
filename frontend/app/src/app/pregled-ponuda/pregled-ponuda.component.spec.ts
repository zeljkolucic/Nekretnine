import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledPonudaComponent } from './pregled-ponuda.component';

describe('PregledPonudaComponent', () => {
  let component: PregledPonudaComponent;
  let fixture: ComponentFixture<PregledPonudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregledPonudaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregledPonudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
