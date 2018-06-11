import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeslisteComponent } from './meslistes.component';

describe('MeslisteComponent', () => {
  let component: MeslisteComponent;
  let fixture: ComponentFixture<MeslisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeslisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeslisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
