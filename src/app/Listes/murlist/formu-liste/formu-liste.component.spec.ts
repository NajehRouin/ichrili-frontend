import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuListeComponent } from './formu-liste.component';

describe('FormuListeComponent', () => {
  let component: FormuListeComponent;
  let fixture: ComponentFixture<FormuListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormuListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormuListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
