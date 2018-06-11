import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitformComponent } from './produitform.component';

describe('ProduitformComponent', () => {
  let component: ProduitformComponent;
  let fixture: ComponentFixture<ProduitformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
