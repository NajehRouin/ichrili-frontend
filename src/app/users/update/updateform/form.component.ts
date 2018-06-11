import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { UpdateComponent } from '../updateliste/updateliste.component';
import { UserService } from '../../../user.service';
import { User } from '../../../models/user';
import 'rxjs';




@Component({
  selector: 'app-updateform',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class UpdateFormComponent implements OnInit {
 
    private context :String ='UPDATE';
  private errorMessage: String = '';
  private Btn_SaveAdd_label = 'UPDATE Profile';
   private Mliste:any;
  
  @Input() private currentUser: any;

  constructor(private _userService: UserService) { }

  ngOnInit() {

      this.currentUser = { _id: '', user_name: '', password: '', avatar_url:'',gender:'',region:'',email:'',numtel:0};
  }
 
  onChangeUser() {

    if (this.currentUser._id === '') {
      this.context = 'UPDATE';
       this.Btn_SaveAdd_label = 'UPDATE Profile';
    }
  }

  Edit(context, user) {
    switch (context) {
     
      case 'UPDATE':
        this.updateCurrentUser(user);
        break;
    }
  }

  public updateCurrentUser(theUser) {
    let body = {  user_name: '', password: '', avatar_url:'',gender:'',region:'',email:'',numtel:0 };
    body.user_name = theUser.user_name;
    body.password = theUser.password;
    body.avatar_url = theUser.avatar_url;
    body.gender=theUser.gender;
    body.region=theUser.region;
    body.email=theUser.email;
   body.numtel=theUser.numtel;
    this._userService
      .updateUser('http://localhost:3000/users/' + theUser._id, body)
      .subscribe(
      result => console.log(result),
      error => this.errorMessage = <any>error
      );

      this.currentUser = { _id: '', user_name: '', password: '', avatar_url:'',gender:'',region:'',email:'',numtel:0 };
  }



}
