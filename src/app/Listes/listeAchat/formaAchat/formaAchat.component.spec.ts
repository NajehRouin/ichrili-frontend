import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaAchatComponent } from './formaAchat.component';

describe('FormaAchatComponent', () => {
  let component: FormaAchatComponent;
  let fixture: ComponentFixture<FormaAchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormaAchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
