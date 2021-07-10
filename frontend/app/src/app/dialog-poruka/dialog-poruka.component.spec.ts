import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPorukaComponent } from './dialog-poruka.component';

describe('DialogPorukaComponent', () => {
  let component: DialogPorukaComponent;
  let fixture: ComponentFixture<DialogPorukaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPorukaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPorukaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
