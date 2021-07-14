import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcenatAgencijeComponent } from './procenat-agencije.component';

describe('ProcenatAgencijeComponent', () => {
  let component: ProcenatAgencijeComponent;
  let fixture: ComponentFixture<ProcenatAgencijeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcenatAgencijeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcenatAgencijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
