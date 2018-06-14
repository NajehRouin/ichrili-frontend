
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../product.service';
import { Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchProductPipe } from '../../../search-product.pipe';
import { Product } from '../../../models/product';
import { CurrencyPipe } from '@angular/common';
import { CategorieService } from '../../../categorie.service';


import { Categorie } from '../../../models/categorie';
import { Market, IPosition } from '../../../models/market';
import { MarketService } from '../../../market.service';
import { ListeAchatService } from '../../../listeAchat.service';
import { listaAchat } from '../../../models/listeAchat';
@Component({
    selector: 'app-Achat',
    templateUrl: './Achat.component.html',
    styleUrls: ['./Achat.component.css']
})
export class AchatlisteComponent implements OnInit {
    malist: any = new Array();
    pos: IPosition = new IPosition(0, 0);
    categorie: Categorie = new Categorie('', '', '');
    market: Market = new Market('', '', '', '', '', this.pos);
    
    products :any=[];
    markets:any=[];
    produit: Product = new Product('', '', 0,'', this.categorie, this.market, '');
    listA: listaAchat = new listaAchat('', this.produit, '', 0, 0, 0);
    private showform: Boolean = false;
    loading = false;
    p: number = 1;
    total: number = 0;
    currentSelection: number = 0;
    searchString: string = '';

    constructor(private _listeAchatService: ListeAchatService, private _productService: ProductService
    , private _marketService : MarketService) {

    }

    ngOnInit() {
        this._listeAchatService.getAllListeAchat().subscribe(data => {
            this.malist = data;
            this.malist.map((listAcht) => {
               
            })
            console.log(data);
        });
        //this.total = this.malist.length;
        this._productService.getAllProducts().subscribe(data => this.products = data);
       this._marketService.getAllMarkets().subscribe(data=>this.markets=data);

    }

    edit(id) {
        this.listA = this.malist.filter((p) => { return p._id === id; })[0];
        console.log('listAchat in Edit Mode', this.listA); }

    delete(id) {
        let l = this.malist.filter((p) => { return p._id === id; })[0];
        console.log('listeAchet in Delete Mode', this.listA);
        this._listeAchatService.deleteListeAchat(l._id).subscribe((response) => console.log('Delete liste', response));
        this._listeAchatService.getAllListeAchat().subscribe(data => {
            this.malist = data;
            console.log(data);
        });
    }
    displayForm() {
        console.log('before:', this.showform);
        this.showform = !this.showform;
        console.log('after:', this.showform);
    }


}
