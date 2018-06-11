import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatlisteComponent } from './Achat.component';

describe('AchatlisteComponent', () => {
  let component: AchatlisteComponent;
  let fixture: ComponentFixture<AchatlisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchatlisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchatlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
