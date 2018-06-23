import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs';
import { listaAchat } from './../models/listeAchat';
import { Observable } from 'rxjs';

@Injectable()
export class ListeAchatService {
  headers: Headers;
  options: RequestOptions;
  constructor(private http: Http) {

  }

  public getAllListeAchat() {
    return this.http.get('http://localhost:3000/listeAchats/', {})
      .map((response: Response) => response.json());
  }

  public getAllListeAchatByOwner(id) {
    return this.http.get('http://localhost:3000/listeAchats/owner/'+id, {})
      .map((response: Response) =>{ 
        console.log("response:",response.json());
        return response.json();
        
      }
      );
  }

  public getAllListeAchatSherdByFriend(id) {
    return this.http.get('http://localhost:3000/listeAchats/friend/'+id, {})
      .map((response: Response) => response.json());
  }

  public updateListeAchat(id: any,list): Observable<any> {
    return this.http.put('http://localhost:3000/listeAchats/'+id, {list},this.options);
  }

  public deleteListeAchat(_id) {
    return this.http.delete('http://localhost:3000/listeAchats/' + _id, this.options);
  }

  public addListeAchat(liste) {
    return this.http.post('http://localhost:3000/listeAchats', liste, this.options);
  }

  public shareListeWithFriend(listeId,friend){
    return this.http.put('http://localhost:3000/listeAchats/share/'+listeId,{friend},this.options);
  }
}

