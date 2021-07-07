import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledNekretninaComponent } from './pregled-nekretnina.component';

describe('PregledNekretninaComponent', () => {
  let component: PregledNekretninaComponent;
  let fixture: ComponentFixture<PregledNekretninaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregledNekretninaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregledNekretninaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
