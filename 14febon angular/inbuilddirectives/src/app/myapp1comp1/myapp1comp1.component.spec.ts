import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Myapp1comp1Component } from './myapp1comp1.component';

describe('Myapp1comp1Component', () => {
  let component: Myapp1comp1Component;
  let fixture: ComponentFixture<Myapp1comp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Myapp1comp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Myapp1comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
