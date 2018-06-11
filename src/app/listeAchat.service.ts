import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs';
import { listaAchat } from './models/listeAchat';
import { Observable } from 'rxjs';

@Injectable()
export class ListeAchatService {
  headers: Headers;
  options: RequestOptions;
  constructor(private http: Http) {

  }

  public getAllListeAchat() {
    return this.http.get('http://localhost:3000/listeAchats', {})
      .map((response: Response) => response.json());
  }

  public updateListeAchat(url: string, param: any): Observable<any> {
    return this.http.put(url, param, this.options);
  }

  public deleteListeAchat(_id) {
    return this.http.delete('http://localhost:3000/listeAchats/' + _id, this.options);
  }

  public addListeAchat(listeA) {
    return this.http.post('http://localhost:3000/listeAchats', listeA, this.options);
  }
}

