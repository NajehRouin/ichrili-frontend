import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';
import { InvitationService } from '../invitation.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-recieved-invitation',
  templateUrl: './recieved-invitation.component.html',
  styleUrls: ['./recieved-invitation.component.css']
})
export class RecievedInvitationComponent implements OnInit {
  recievedInvitation: any = [];
  users = [];
  senders = [];
  private _users = [];
  friends: any=[];
  private invitation = { senderId: '', recieverId: '' };
  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor(
    private userService: UserService,
    private invitationService: InvitationService
  ) { }

  ngOnInit() {
    this.invitationService.getRecievedInvitations(this.currentUser._id)
      .subscribe(invitations => {
        this.recievedInvitation = invitations.json();
      });
    this.userService.getFreinds(this.currentUser._id).subscribe(amis => {
      this.friends = amis;
      console.log("freinds:",this.friends);
    })

  }

  accept(invitation) {
    this.invitationService.acceptInvitation(invitation)
      .subscribe(friend => console.log(friend));
      this.recievedInvitation = this.recievedInvitation.filter(inv => inv.senderId !== invitation.senderId);
      console.log("frindsssss",this.recievedInvitation);

  };






  reject() {

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

