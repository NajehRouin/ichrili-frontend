import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs';
import { Categorie} from './../models/categorie';
import { Observable } from 'rxjs';

@Injectable()
export class CategorieService {
  headers: Headers;
  options: RequestOptions;
  constructor(private http: Http) {

  }

  public getAllCategories() {
    return this.http.get('http://localhost:3000/categories', {})
      .map((response: Response) => response.json());
  }

  public updateCategories(url: string, param: any): Observable<any> {
    return this.http.put(url, param, this.options);
  }

  public deleteCategories(_id) {
    return this.http.delete('http://localhost:3000/categories/' + _id, this.options);
  }

  public addCategories(categorie) {
    return this.http.post('http://localhost:3000/categories', categorie, this.options);
  }
}
