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
  recievedInvitation: any=[];
  users = [];
  senders = [];
  private _users = [];
  frends : any;
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


  }

  accept(sender, reciever){
    this.invitationService.acceptInvitation({sender:sender,reciever:reciever})
    .subscribe(friend=>console.log(friend));
    this._users = this._users.filter(user => user._id !== reciever._id);
     
     
    };

  




  reject(){
    
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

