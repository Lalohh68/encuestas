import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinadorDeCarrerasComponent } from './coordinador-de-carreras.component';

describe('CoordinadorDeCarrerasComponent', () => {
  let component: CoordinadorDeCarrerasComponent;
  let fixture: ComponentFixture<CoordinadorDeCarrerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinadorDeCarrerasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinadorDeCarrerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
