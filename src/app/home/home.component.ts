import { Component, OnInit } from '@angular/core';
import {ProductService}from'../service/product.service';
import{Product} from '../models/product';
import{MarketService} from '../service/market.service';
import{Market} from '../models/market';
import {Categorie} from '../models/categorie';
import{CategorieService}from '../service/categorie.service';
import { User } from './../models/user';
import {searchCategoriePipe} from '../searche-categorie.pipe';
import {SearchProductPipe} from '../search-product.pipe';
import {SearchMarketPipe} from '../search-market.pipe';
import { Productspe } from './../models/productspe';
import { ProductSpeService } from './../service/productspe.service';
const image_url: String = 'http://localhost:3000/upload/';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any=[];
  malist: any = new Array();
  listmarket :any= new Array();
  listProduit :any=new Array();
  p: number = 1;
  categorie:any=[];
 
  market:any=[];
  produit:any=[];
  markets:any=[];
  categories:any=[];
  total: number = 0;
  private _avatar_url: string;
  private _user: User;
  constructor(private marketservice : MarketService,private productservice : ProductService,
 private categorieservice:CategorieService) {
  this._user = new User('','','','','','','',0);
 }

  ngOnInit() {

    this._user = JSON.parse(localStorage.getItem('currentUser'));
    this._avatar_url = this.getAvatarPath(this._user.gender);

    this.productservice.getAllProducts().subscribe(data => {
      this.listProduit = data;
      this.listProduit.map((produit) => {
        //console.log('produit',produit);
        if (produit.photo_url) {
          produit.photo_url = image_url + produit.photo_url;
        }
      });

     // console.log(data); 
    });
    this.total = this.listProduit.length;

    this.marketservice.getAllMarkets().subscribe(data=> this.markets=data);
    this.categorieservice.getAllCategories().subscribe(data => {
      this.malist = data;
      this.malist.map((categorie) => {
        //console.log('categorie',categorie);
      });

     // console.log(data); 
    });
    this.total = this.malist.length;
  }
  getAvatarPath(gender: string): string {
    switch (gender.toUpperCase()) {
      case 'HOMME':
        return 'assets/homme.jpg';
      case 'FEMME':
        return 'assets/femme.jpg';
      default: return 'assets/homme.jpg';
    }

  }

 
}
