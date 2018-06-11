import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchProductPipe } from '../search-product.pipe';
import { Product } from '../models/product';
import { CurrencyPipe } from '@angular/common';
import {CategorieService}from'../categorie.service';

const image_url: String = 'http://localhost:3000/upload/';
import{Categorie} from'../models/categorie';
import{Market,IPosition} from '../models/market';
import {MarketService} from '../market.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  malist: any = new Array();
  pos:IPosition=new IPosition(0,0);
   categorie:Categorie=new Categorie('','','');
  market:Market=new Market('','','','','',this.pos);
  categories:any=[];
  markets:any=[];
  produit: Product = new Product('', '', 0, this.categorie,this.market ,'default_product.png');
  private showform: Boolean = false;
  loading = false;
  p: number = 1;
  total: number = 0;
  currentSelection: number = 0;
  searchString: string = '';

  constructor(private _productService: ProductService,private _marketservice :MarketService,
  private _categorieservice :CategorieService) {

  }

  ngOnInit() {
    this._productService.getAllProducts().subscribe(data => {
      this.malist = data;
      this.malist.map((product) => {
        //console.log('product:', product);
        if (product.photo_url) {
          product.photo_url = image_url + product.photo_url;
        }
      })
      console.log(data); 
    });
    //this.total = this.malist.length;
    this._marketservice.getAllMarkets().subscribe(data => this.markets=data);
    this._categorieservice.getAllCategories().subscribe(data => this.categories=data);
    
  }

  edit(id) {
    this.produit = this.malist.filter((p) => { return p._id === id; })[0];
    console.log('Product in Edit Mode', this.produit);
  }

  delete(id) {
    let p = this.malist.filter((p) => { return p._id === id; })[0];
    console.log('Product in Delete Mode', this.produit);
    this._productService.deleteProduct(p._id).subscribe((response) => console.log('Delete Product', response));
    this._productService.getAllProducts().subscribe(data => {
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
