import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  private user :User = new User('','','','','','','',0);
  //private user: User = new User();
  constructor(private _userService: UserService,
    private _router: Router) { }

  ngOnInit() {
  }

  addUser(user) {
    // console.dir(user);
    this._userService.addUser(user).subscribe((data) => { console.log('User add successfully from fe') });
    this._router.navigate(['/login']);
  }

}
