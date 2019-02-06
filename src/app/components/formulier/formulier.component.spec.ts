import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulierComponent } from './formulier.component';

describe('FormulierComponent', () => {
  let component: FormulierComponent;
  let fixture: ComponentFixture<FormulierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
