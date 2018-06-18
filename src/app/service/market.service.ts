import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs';
import { Market } from './../models/market';
import { Observable } from 'rxjs';

@Injectable()
export class MarketService {
  headers: Headers;
  options: RequestOptions;
  constructor(private http: Http) {

  }

  public getAllMarkets() {
    return this.http.get('http://localhost:3000/markets', {})
      .map((response: Response) => response.json());
  }

  public updateMarkets(url: string, param: any): Observable<any> {
    return this.http.put(url, param, this.options);
  }

  public deleteMarkets(_id) {
    return this.http.delete('http://localhost:3000/markets/' + _id, this.options);
  }

  public addMarkets(market) {
    return this.http.post('http://localhost:3000/markets', market, this.options);
  }
}
