import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbutronComponent } from './jumbutron.component';

describe('JumbutronComponent', () => {
  let component: JumbutronComponent;
  let fixture: ComponentFixture<JumbutronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbutronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbutronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
