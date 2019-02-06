import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Getal2Component } from './getal2.component';

describe('Getal2Component', () => {
  let component: Getal2Component;
  let fixture: ComponentFixture<Getal2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Getal2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Getal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
