import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicologicoComponent } from './psicologico.component';

describe('PsicologicoComponent', () => {
  let component: PsicologicoComponent;
  let fixture: ComponentFixture<PsicologicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsicologicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsicologicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
