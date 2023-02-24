import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroDeCopiadoComponent } from './centro-de-copiado.component';

describe('CentroDeCopiadoComponent', () => {
  let component: CentroDeCopiadoComponent;
  let fixture: ComponentFixture<CentroDeCopiadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentroDeCopiadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentroDeCopiadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
