import { Component, OnInit } from '@angular/core';
import { InvitationService } from '../invitation.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-sending-invitation',
  templateUrl: './sending-invitation.component.html',
  styleUrls: ['./sending-invitation.component.css']
})
export class SendingInvitationComponent implements OnInit {

  private currentUser = JSON.parse(localStorage.getItem('currentUser'));
  private _users = [];
  private invitation = { senderId: '', recieverId: '' };

  constructor(private _invitationService: InvitationService,
    private _userService: UserService) { }

  ngOnInit() {
    this._userService.getAllUsers().subscribe((data) => {
      this._users = data;
    })
  }

  public sendInvitation(senderId, recieverId) {
    this._invitationService.sendInvitation({ senderId: senderId, recieverId: recieverId })
      .subscribe(response => console.log(response));
  }
}
