import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubesGeneralComponent } from './clubes-general.component';

describe('ClubesGeneralComponent', () => {
  let component: ClubesGeneralComponent;
  let fixture: ComponentFixture<ClubesGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubesGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubesGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
