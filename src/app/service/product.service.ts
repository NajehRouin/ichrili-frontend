import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs';
import { Product } from './../models/product';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  headers: Headers;
  options: RequestOptions;
  constructor(private http: Http) {

  }

  public getAllProducts() {
    return this.http.get('http://localhost:3000/products', {})
      .map((response: Response) => response.json());
  }

  public updateProduct(url: string, param: any): Observable<any> {
    return this.http.put(url, param, this.options);
  }

  public deleteProduct(_id) {
    return this.http.delete('http://localhost:3000/products/' + _id, this.options);
  }

  public addProduct(product) {
    return this.http.post('http://localhost:3000/products', product, this.options);
  }
}
