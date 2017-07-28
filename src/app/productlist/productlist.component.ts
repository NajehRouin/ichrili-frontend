import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs';
import { Product } from '../models/product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  malist: any = new Array();
  produit: Product = new Product('',0,'');

  constructor(private _productService: ProductService) {
  }

  ngOnInit() {
    this._productService.getAllProducts().subscribe(data => {
    this.malist = data;
      console.log(data);
    });
  }

   edit(index) {
   this.produit=this.malist[index];
  }

  delete(index){
    let p=this.malist[index];
    this._productService.deleteProduct(p._id).subscribe((response) => console.log('Delete Product',response));
    this._productService.getAllProducts().subscribe(data => {
    this.malist = data;
      console.log(data);
    });
  }

}
