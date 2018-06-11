import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs';
import { Productspe } from './models/productspe';
import { Observable } from 'rxjs';

@Injectable()
export class ProductSpeService {
  headers: Headers;
  options: RequestOptions;
  constructor(private http: Http) {

  }

  public addProductspe(productSp) {
    return this.http.post('http://localhost:3000/productSpecials', productSp, this.options);
  }
}
