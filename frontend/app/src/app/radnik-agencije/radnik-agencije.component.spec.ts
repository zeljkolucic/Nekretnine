import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadnikAgencijeComponent } from './radnik-agencije.component';

describe('RadnikAgencijeComponent', () => {
  let component: RadnikAgencijeComponent;
  let fixture: ComponentFixture<RadnikAgencijeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadnikAgencijeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadnikAgencijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
