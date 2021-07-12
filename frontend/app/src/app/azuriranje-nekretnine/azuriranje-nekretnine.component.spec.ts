import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzuriranjeNekretnineComponent } from './azuriranje-nekretnine.component';

describe('AzuriranjeNekretnineComponent', () => {
  let component: AzuriranjeNekretnineComponent;
  let fixture: ComponentFixture<AzuriranjeNekretnineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzuriranjeNekretnineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AzuriranjeNekretnineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
