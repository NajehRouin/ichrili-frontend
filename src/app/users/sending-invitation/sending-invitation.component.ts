import { Component, OnInit } from '@angular/core';
import { InvitationService } from '../invitation.service';
import { UserService } from '../../user.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchUserPipe } from '../search-user.pipe';


@Component({
  selector: 'app-sending-invitation',
  templateUrl: './sending-invitation.component.html',
  styleUrls: ['./sending-invitation.component.css']
})
export class SendingInvitationComponent implements OnInit {

  private currentUser = JSON.parse(localStorage.getItem('currentUser'));
  private _users = [];
  private invitation = { senderId: '', recieverId: '' };
  private p: Number = 1;
  private total: Number = 0;
  private currentSelection: Number = 0;
  private searchString: String = '';

  constructor(private _invitationService: InvitationService,
    private _userService: UserService) { }

  ngOnInit() {
    this._userService.getAllUsers()
      .map((users: User[]) => {
        return users.filter((user) => user._id !== this.currentUser._id);
      })
      .subscribe((users) => {
        this._users = users;
      });
  }

  public sendInvitation(senderId, recieverId) {
    this._invitationService.sendInvitation({ senderId: senderId, recieverId: recieverId })
      .subscribe(response => console.log(response));
  }

  public getAvatarUrl(gender) {
    switch (gender.toUpperCase()) {
      case 'HOMME':
        return 'assets/homme.jpg';
      case 'FEMME':
        return 'assets/femme.jpg'
      default:
        return 'assets/homme.jpg';
    }
  }

  getColor(i) {
    let r = i % 2;
    switch (r) {
      case 0:
        return 'info';
      case 1:
        return '';
      default:
        return 'info';
    }
  }
}
