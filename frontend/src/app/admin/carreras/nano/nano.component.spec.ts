import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NanoComponent } from './nano.component';

describe('NanoComponent', () => {
  let component: NanoComponent;
  let fixture: ComponentFixture<NanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NanoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
