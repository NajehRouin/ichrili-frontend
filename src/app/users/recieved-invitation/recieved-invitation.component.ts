import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../user.service';
import { InvitationService } from '../invitation.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-recieved-invitation',
  templateUrl: './recieved-invitation.component.html',
  styleUrls: ['./recieved-invitation.component.css']
})
export class RecievedInvitationComponent implements OnInit {
  recievedInvitation: any;
  users = [];
  senders = [];
  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor(
    private userService: UserService,
    private invitationService: InvitationService
  ) { }

  ngOnInit() {
    this.invitationService.getRecievedInvitations(this.currentUser._id)
      .subscribe(invitations => {
        this.recievedInvitation = invitations.json();

        this.recievedInvitation.map(inv => this.senders.push(inv.senderId));
        console.log("recieved Invitation ----------- ", this.senders);

        this.userService.getAllUsers()
          .subscribe(data => {
            this.users = data;
            console.log("Users -----before ", this.users);
            console.log("senders -----before ", this.senders);
            this.users.filter(u => {
              u._id in this.senders
            });
            console.log("Users ------After ", this.users);
            console.log("senders ------After ", this.senders)
          });

      });


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

