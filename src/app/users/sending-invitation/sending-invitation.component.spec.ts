import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendingInvitationComponent } from './sending-invitation.component';

describe('SendingInvitationComponent', () => {
  let component: SendingInvitationComponent;
  let fixture: ComponentFixture<SendingInvitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendingInvitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendingInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
