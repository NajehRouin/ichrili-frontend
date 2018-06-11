import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs';

const urlApi = 'http://localhost:3000/invitations';

@Injectable()
export class InvitationService {
  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
  }

  public sendInvitation(invitation): Observable<any> {
    return this.http.post(urlApi, invitation);
  }

  public acceptInvitation(invitation) {
    return this.http.put(urlApi + '/accept/' + invitation.senderId, invitation.recieverId);

  }

  public getRecievedInvitations(senderId) {
    return this.http.get(urlApi + '/' + senderId);
  }
}
