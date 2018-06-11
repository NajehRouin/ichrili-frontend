import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketListeComponent } from './marketlist.component';

describe('MarketListeComponent', () => {
  let component: MarketListeComponent;
  let fixture: ComponentFixture<MarketListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
