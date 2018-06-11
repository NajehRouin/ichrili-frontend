import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitlistComponent } from './produitlist.component';

describe('ProduitlistComponent', () => {
  let component: ProduitlistComponent;
  let fixture: ComponentFixture<ProduitlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
