import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketformComponent } from './marketform.component';

describe('MarketformComponent', () => {
  let component: MarketformComponent;
  let fixture: ComponentFixture<MarketformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
