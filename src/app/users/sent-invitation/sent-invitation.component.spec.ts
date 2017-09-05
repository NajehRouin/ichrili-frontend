import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentInvitationComponent } from './sent-invitation.component';

describe('SentInvitationComponent', () => {
  let component: SentInvitationComponent;
  let fixture: ComponentFixture<SentInvitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentInvitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
