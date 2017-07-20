import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class ProductService {
  constructor( private http: Http) {

  }

  public getAllProducts() {
    return this.http.get('http://localhost:3000/products',{})
      .map((response: Response) => response.json());
  }

}
