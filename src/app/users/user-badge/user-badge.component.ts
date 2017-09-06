import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-badge',
  templateUrl: './user-badge.component.html',
  styleUrls: ['./user-badge.component.css']
})
export class UserBadgeComponent implements OnInit {
  private _avatar_url: string;
  private _user: User;

  constructor() {
    this._user = new User;
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
