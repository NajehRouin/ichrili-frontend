import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorielistComponent } from './categorielist.component';

describe('CategorielistComponent', () => {
  let component: CategorielistComponent;
  let fixture: ComponentFixture<CategorielistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorielistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorielistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
