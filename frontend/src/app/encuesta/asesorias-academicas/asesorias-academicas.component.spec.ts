import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoriasAcademicasComponent } from './asesorias-academicas.component';

describe('AsesoriasAcademicasComponent', () => {
  let component: AsesoriasAcademicasComponent;
  let fixture: ComponentFixture<AsesoriasAcademicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsesoriasAcademicasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsesoriasAcademicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
