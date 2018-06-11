import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private _avatar_url: string;
  private _user: User;

  constructor() {
    this._user = new User('','','','','','','',0);
  }

  ngOnInit() {
    this._user = JSON.parse(localStorage.getItem('currentUser'));
    this._avatar_url = this.getAvatarPath(this._user.gender);
  }


  getAvatarPath(gender: string): string {
    switch (gender.toUpperCase()) {
      case 'HOMME':
        return 'assets/homme.jpg';
      case 'FEMME':
        return 'assets/femme.jpg';
      default: return 'assets/homme.jpg';
    }

  }
}
