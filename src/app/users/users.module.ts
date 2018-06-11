import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { InvitationService } from './invitation.service';
import { ProfileComponent } from './profile/profile.component';
import { RecievedInvitationComponent } from './recieved-invitation/recieved-invitation.component';
import { SentInvitationComponent } from './sent-invitation/sent-invitation.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserBadgeComponent } from './user-badge/user-badge.component';
import { UserListComponent } from './user-list/user-list.component';
import { SendingInvitationComponent } from './sending-invitation/sending-invitation.component';
import { SearchUserPipe } from './search-user.pipe';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule
  ],
  declarations: [ProfileComponent,
    RecievedInvitationComponent,
    SentInvitationComponent,
    SignupFormComponent,
    LoginFormComponent,
    UserBadgeComponent,
    UserListComponent,
    SendingInvitationComponent,
   
    SearchUserPipe],
  providers: [
    AuthService,
    InvitationService
  ],
  exports: [
    ProfileComponent,
     RecievedInvitationComponent,
    SentInvitationComponent,
    SignupFormComponent,
    LoginFormComponent,
    UserBadgeComponent,
    UserListComponent,
    SendingInvitationComponent,
    SearchUserPipe,
   
  ]
})
export class UsersModule { }
