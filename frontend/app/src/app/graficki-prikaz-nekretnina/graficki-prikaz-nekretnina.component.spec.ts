import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafickiPrikazNekretninaComponent } from './graficki-prikaz-nekretnina.component';

describe('GrafickiPrikazNekretninaComponent', () => {
  let component: GrafickiPrikazNekretninaComponent;
  let fixture: ComponentFixture<GrafickiPrikazNekretninaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrafickiPrikazNekretninaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafickiPrikazNekretninaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
