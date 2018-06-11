
import { Component, OnInit } from '@angular/core';

import { Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserService } from '../../../user.service';
import { User } from '../../../models/user';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateliste.component.html',
  styleUrls: ['./updateliste.component.css']
})
export class UpdateComponent implements OnInit {
 
    
  profile :User = new User('','','','','','','',0);
  //profile: User = new User();
  private showform: Boolean = true;
  loading = false;
  p: number = 1;
  total: number = 0;
  currentSelection: number = 0;
  searchString: string = '';

  constructor(private _userService : UserService) {

  }

  ngOnInit() {
 
    
  }




  displayForm() {
    console.log('before:', this.showform);
    this.showform = !this.showform;
    console.log('after:', this.showform);
  }

  
}
