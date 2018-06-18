import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs';
import { Melistes } from './../models/mesliste';
import { Observable } from 'rxjs';

@Injectable()
export class MesListeService {
  headers: Headers;
  options: RequestOptions;
  constructor(private http: Http) {

  }


  public getAllMeslists() {
    return this.http.get('http://localhost:3000/meslistes', {})
      .map((response: Response) => response.json());
  }

  public updateMeslists(url: string, param: any): Observable<any> {
    return this.http.put(url, param, this.options);
  }

  public deleteMeslists(_id) {
    return this.http.delete('http://localhost:3000/meslistes/' + _id, this.options);
  }

  public addMeslists(mlist) {
    return this.http.post('http://localhost:3000/meslistes', mlist, this.options);
  }
}

