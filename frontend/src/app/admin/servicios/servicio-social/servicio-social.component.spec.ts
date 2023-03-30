import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioSocialComponent } from './servicio-social.component';

describe('ServicioSocialComponent', () => {
  let component: ServicioSocialComponent;
  let fixture: ComponentFixture<ServicioSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioSocialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
