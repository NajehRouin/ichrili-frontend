import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecievedInvitationComponent } from './recieved-invitation.component';

describe('RecievedInvitationComponent', () => {
  let component: RecievedInvitationComponent;
  let fixture: ComponentFixture<RecievedInvitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecievedInvitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecievedInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
