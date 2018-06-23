import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { ProductlistComponent } from '../productlist/productlist.component';
import { ProductService } from '../service/product.service';
import { Product } from '../models/product';
import 'rxjs';

import { Market} from '../models/market';
import { CategorieService } from '../service/categorie.service';
import { Categorie } from '../models/categorie';
import { MarketService } from '../service/market.service';
@Component({
  
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent implements OnInit {
  private context: String = 'ADD';
  private con: String = "UPDATE";
  private errorMessage: String = '';
  private Btn_SaveAdd_label = 'Add Product';
  private btn_ubdate = "update product";
  
  public categorie: any = [];
  market: any = [];
  categories: any = [];
  markets: any = [];

  @Input() private currentProduct: any;

  constructor(private _productService: ProductService, private _marketservice: MarketService,
    private _categorieservice: CategorieService) { }

  ngOnInit() {

    this._marketservice.getAllMarkets().subscribe(data => this.markets = data);
    this._categorieservice.getAllCategories().subscribe(data => this.categories = data);

    this.currentProduct = { _id: '', designation: '', price: 0, unite: '', categorie: this.categorie, market: this.market };
  }

  onChangeDesignation() {
    if (this.currentProduct.designation === '') {
      this.context = 'ADD';
      this.Btn_SaveAdd_label = 'Add Product';
    } else {
      this.con = 'UPDATE';
      this.btn_ubdate = 'Update Product';
    }
  }

  add(context, product) {
    switch (context) {
      case 'ADD':
        this.addCurrentProduct(product)

        break;
    }
  }
  edit (con,product){
    switch (con){
    case 'UPDATE':
    this.updateCurrentProduct(product);
    break;
  }
}

 



  public updateCurrentProduct(theProduct) {
    let body = { designation: '', price: 0, unite: '', categorie: this.categorie, market: this.market };
    body.designation = theProduct.designation;
    body.price = theProduct.price;
    body.unite = theProduct.unite;
    body.categorie = theProduct.categorie;
    body.market = theProduct.market
    this._productService
      .updateProduct('http://localhost:3000/products/' + theProduct._id, body)
      .subscribe(
        result => console.log("update ", result),
        error => this.errorMessage = <any>error
      );

    this.currentProduct = { _id: '', designation: '', price: 0, unite: '', categorie: this.categorie, market: this.market };
  }

  public addCurrentProduct(theProduct) {
    let body = { designation: '', price: 0, unite: '', categorie: this.categorie, market: this.market };
    body.designation = theProduct.designation;
    body.price = theProduct.price;
    body.unite = theProduct.unite;
    body.categorie = theProduct.categorie;
    body.market = theProduct.market
    this._productService
      .addProduct(body)
      .subscribe(
        result => console.log(result),
        error => this.errorMessage = <any>error
      );
    this.currentProduct = { _id: '', designation: '', price: 0, unite: '', categorie: this.categorie, market: this.market };
  }


}
