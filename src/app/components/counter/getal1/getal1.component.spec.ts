import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Getal1Component } from './getal1.component';

describe('Getal1Component', () => {
  let component: Getal1Component;
  let fixture: ComponentFixture<Getal1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Getal1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Getal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
