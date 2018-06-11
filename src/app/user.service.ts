import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs';
import { User } from './models/user';
@Injectable()
export class UserService {
  headers: Headers;
  options: RequestOptions;
  constructor(private http: Http) {

  }

  public getAllUsers() {
    return this.http.get('http://localhost:3000/users', {})
      .map((response: Response) => response.json());
  }


  public updateUser(url: string, param: any): Observable<any> {
    return this.http.put(url, param, this.options);
  }

  public deleteUser(_id) {
    return this.http.delete('http://localhost:3000/users/' + _id, this.options)
  }

  public addUser(user) {
    return this.http.post('http://localhost:3000/users', user, this.options)
  }
  public authenticate(user) {
    return this.http.post('http://localhost:3000/users/authenticate', user, this.options)
  }

  public getUserById(userId) {
    return this.http.get('http://localhost:3000/users/' + userId);
  }

}
