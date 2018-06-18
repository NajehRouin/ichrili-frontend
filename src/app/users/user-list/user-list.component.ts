import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  malist: any = new Array();
  user: User;
  private showForm: Boolean = false;
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getAllUsers().subscribe(data => {
      this.malist = data;
      console.log(data);
    })

  }

  delete(id) {
    let p = this.malist.filter((p) => { return p._id === id; })[0];
    console.log('Product in Delete Mode', this.user);
    this._userService.deleteUser(p._id).subscribe((response) => console.log('Delete User', response));
    this._userService.getAllUsers().subscribe(data => {
      this.malist = data;
      console.log(data);
    });
  }

  addUser() {
    this.showForm = !this.showForm;
  }
  edit(id) {
    this.user = this.malist.filter((p) => { return p._id === id; })[0];
    console.log('user in Edit Mode', this.user);
  }

}
