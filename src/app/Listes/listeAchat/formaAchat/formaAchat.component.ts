import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { AchatlisteComponent } from '../Achatliste/Achat.component';
import { ListeAchatService } from '../../../service/listeAchat.service' ;
import { listaAchat } from '../../../models/listeAchat';
import {ProductService} from '../../../service/product.service';
import { Product } from '../../../models/product';

import{Market,} from '../../../models/market';
import {CategorieService}from'../../../service/categorie.service';
import{Categorie} from'../../../models/categorie';
import {MarketService} from '../../../service/market.service';
import 'rxjs';


@Component({
  selector: 'app-formaAchat',
  templateUrl: './formaAchat.component.html',
  styleUrls: ['./formaAchat.component.css']
})
export class FormaAchatComponent implements OnInit {
  private context: String = 'ADD';
  private errorMessage: String = '';
  private Btn_SaveAdd_label = 'Add ListeAchat';
 
products :any[];
markets:any[];

public categorie:Categorie=new Categorie('','','');
market:Market=new Market('','','','',0);
product :Product =new Product('','',0,'',this.categorie,this.market,'');
  @Input() private currentListeAchat: any;

  constructor(private _listeAchatService:ListeAchatService,
    private _productService: ProductService,private _marketService:MarketService) { }

  ngOnInit() {
    
    this._productService.getAllProducts().subscribe(data => this.products=data);
 this._marketService.getAllMarkets().subscribe(data=>this.markets=data);
    this.currentListeAchat = { _id: '',produit:this.product, market:this.product.market.market_name,qte:0,prix:this.product.price,totale:0};
  }

  onChangeProduit() {
    if (this.currentListeAchat._id === '') {
      this.context = 'ADD';
       this.Btn_SaveAdd_label = 'Add ListeAchat';
    } else {
      this.context = 'UPDATE';
       this.Btn_SaveAdd_label = 'Update ListeAchat';
    }
  }

  addOrEdit(context, listeA) {
    switch (context) {
      case 'ADD':
        this.addcurrentListeAchat(listeA)

        break;
      case 'UPDATE':
        this.updatecurrentListeAchat(listeA);
        break;
    }
  }

  public updatecurrentListeAchat(theListeA) {
    let body = { produit:this.product, market:this.market,qte:0,prix:0,totale:0 };
    body.produit = theListeA.produit;
    body.market = theListeA.market;
    body.qte = theListeA.qte;
    body.prix=theListeA.prix;
    body.totale=theListeA.qte*theListeA.prix;
    this._listeAchatService
      .updateListeAchat('http://localhost:3000/listeAchats/' + theListeA._id, body)
      .subscribe(
      result => console.log(result),
      error => this.errorMessage = <any>error
      );

      this.currentListeAchat = { _id: '',produit:this.product, market:this.market,qte:0,prix:0,totale:0};
  }

  public addcurrentListeAchat(theListeA) {
    let body = { produit:this.product, market:this.product.market,qte:0,prix:0,totale:0 };
    body.produit = theListeA.produit;
    body.market = theListeA.market;
    body.qte = theListeA.qte;
    body.prix=theListeA.prix;
    body.totale=theListeA.qte*theListeA.prix;
    this._listeAchatService
      .addListeAchat(body)
      .subscribe(
      result => console.log(result),
      error => this.errorMessage = <any>error
      );
      this.currentListeAchat = { _id: '',produit:this.product, market:this.market,qte:0,prix:0,totale:0};
  }
  

}
