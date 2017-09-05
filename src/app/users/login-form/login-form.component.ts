import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../user.service';
import { Router, Route, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  private _user: User = new User();
  private result: { err: '', message: '' } = { err: '', message: '' };
  private showMessage: Boolean = false;


  constructor(
    private _userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {
  }

  login(user) {
    this.showMessage = true;
    return this._userService.authenticate(user)
      .map((data: any) => {
        // console.log('***- ',typeof data,'************  ',data);

        return JSON.parse(data._body);
      }).
      subscribe((response) => {
        if (response.err === 'Login Succeed') {
          localStorage.setItem('currentUser', JSON.stringify(response.message));
          this.router.navigate(['/home']);
        } else {
          localStorage.removeItem('currentUser');
          this.router.navigate(['/login']);
        }
        this.result = response;
      });
  }

  goSignupForm(){
    this.router.navigate(['signup']);
  }

}
