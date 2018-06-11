import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { MarketListeComponent } from '../listes/marketlist.component';
import { MarketService } from '../../market.service';
import { Market ,IPosition} from '../../models/market';
import 'rxjs';

@Component({
  selector: 'app-marketform',
  templateUrl: './marketform.component.html',
  styleUrls: ['./marketform.component.css']
})
export class MarketformComponent implements OnInit {
  private context: String = 'ADD';
  private errorMessage: String = '';
  private Btn_SaveAdd_label = 'Add Market';
   private listemar:any;
   private listeVille =  ['mahdia','tunis','sousse','sfax','sidi bouzid','gafsa','kairouan',
  'Monastir','tataouine','kébili','bizerte','ben arous','tozeur','manouba','mednin','Ariana',
'beja','gabes','jendouba','kasserine','kef','nabeul','siliana','zaghouan'];
   pos:IPosition=new IPosition(0,0);
  @Input() private currentMarket: any;

  constructor(private _marketService: MarketService) { }

  ngOnInit() {

      this.currentMarket = { _id: '', market_name: '', Adresse: '', ville:this.listeVille,position:this.pos };
  }
 
  onChangeMarket_Name() {

    if (this.currentMarket._id === '') {
      this.context = 'ADD';
       this.Btn_SaveAdd_label = 'Add Market';
    } else {
      this.context = 'UPDATE';
       this.Btn_SaveAdd_label = 'Update Market';
    }
  }

  addOrEdit(context, market) {
    switch (context) {
      case 'ADD':
        this.addCurrentMarket(market)

        break;
      case 'UPDATE':
        this.updateCurrentMarket(market);
        break;
    }
  }

  public updateCurrentMarket(theMarket) {
    let body = { market_name: '', Adresse: '', ville:this.listeVille,position:this.pos };
    body.market_name = theMarket.market_name;
    body.Adresse = theMarket.Adresse;
    body.ville = theMarket.ville;
    body.position=theMarket.position;
    this._marketService
      .updateMarkets('http://localhost:3000/markets/' + theMarket._id, body)
      .subscribe(
      result => console.log(result),
      error => this.errorMessage = <any>error
      );

    this.currentMarket = { _id: '',  market_name: '', Adresse: '', ville:this.listeVille,position:this.pos  };
  }

  public addCurrentMarket(theMarket) {
    let body = { market_name: '', Adresse: '', ville:this.listeVille,position:this.pos  };
    body.market_name = theMarket.market_name;
    body.Adresse = theMarket.Adresse;
    body.ville = theMarket.ville;
    body.position=theMarket.position;

    this._marketService
      .addMarkets(body)
      .subscribe(
      result => console.log(result),
      error => this.errorMessage = <any>error
      );
    this.currentMarket = { _id: '',  market_name: '', Adresse: '',ville:this.listeVille,position:this.pos };
  }

}
