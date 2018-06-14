import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MurlistComponent } from './murlist.component';

describe('MurlistComponent', () => {
  let component: MurlistComponent;
  let fixture: ComponentFixture<MurlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MurlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MurlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
