import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraescolaresComponent } from './extraescolares.component';

describe('ExtraescolaresComponent', () => {
  let component: ExtraescolaresComponent;
  let fixture: ComponentFixture<ExtraescolaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraescolaresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraescolaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
