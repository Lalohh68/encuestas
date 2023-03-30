import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroDeComputoComponent } from './centro-de-computo.component';

describe('CentroDeComputoComponent', () => {
  let component: CentroDeComputoComponent;
  let fixture: ComponentFixture<CentroDeComputoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentroDeComputoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentroDeComputoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
