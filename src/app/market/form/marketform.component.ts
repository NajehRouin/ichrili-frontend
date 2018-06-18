import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { MarketListeComponent } from '../listes/marketlist.component';
import { MarketService } from '../../service/market.service';
import { Market} from '../../models/market';
import 'rxjs';

@Component({
  selector: 'app-marketform',
  templateUrl: './marketform.component.html',
  styleUrls: ['./marketform.component.css']
})
export class MarketformComponent implements OnInit {
  private context: String = 'ADD ';
  private update: String = 'Update';
  private errorMessage: String = '';
  private Btn_SaveAdd_label = 'Add Market';
  private Btn_Update = "UPdate Market "
  private listemar: any = [];
  private listeVille: any = ['mahdia', 'tunis', 'sousse', 'sfax', 'sidi bouzid', 'gafsa', 'kairouan',
    'Monastir', 'tataouine', 'kébili', 'bizerte', 'ben arous', 'tozeur', 'manouba', 'mednin', 'Ariana',
    'beja', 'gabes', 'jendouba', 'kasserine', 'kef', 'nabeul', 'siliana', 'zaghouan'];
 
  @Input() private currentMarket: any;


  constructor(private _marketService: MarketService) { }

  ngOnInit() {

    this.currentMarket = { _id: '', market_name: '', Adresse: '', ville: this.listeVille,code :1 };
  }

  onChangeMarket_Name() {

    if (this.currentMarket._id === '') {
      this.context 
      this.Btn_SaveAdd_label ;
    } else {
      this.update
      this.Btn_Update;
    }
  }

  add(context, market) {
    switch (context) {
      case 'ADD':
        this.addCurrentMarket(market)

        break;
    }
  }
edit (update,market){
  switch (update){
default :
    this.updateCurrentMarket(market);
    break;
}
}
  

  public updateCurrentMarket(theMarket) {
    let body = { market_name: '', Adresse: '', ville: this.listeVille, code:1 };
    body.market_name = theMarket.market_name;
    body.Adresse = theMarket.Adresse;
    body.ville = theMarket.ville;
    body.code = theMarket.code;
    this._marketService
      .updateMarkets('http://localhost:3000/markets/' + theMarket._id, body)
      .subscribe(
        result => console.log(result),
        error => this.errorMessage = <any>error
      );

    this.currentMarket = { _id: '', market_name: '', Adresse: '', ville: this.listeVille, code:1 };
  }

  public addCurrentMarket(theMarket) {
    let body = { market_name: '', Adresse: '', ville: this.listeVille, code:1 };
    body.market_name = theMarket.market_name;
    body.Adresse = theMarket.Adresse;
    body.ville = theMarket.ville;
    body.code = theMarket.code;

    this._marketService
      .addMarkets(body)
      .subscribe(
        result => console.log(result),
        error => this.errorMessage = <any>error
      );
    this.currentMarket = { _id: '', market_name: '', Adresse: '', ville: this.listeVille, code:1 };
  }

}
