import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { ProductlistComponent } from '../productlist/productlist.component';
import { ProductService } from '../product.service';
import { Product } from '../models/product';
import 'rxjs';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent implements OnInit {
  private context: String = 'ADD';
  private errorMessage: String = '';
  private Btn_SaveAdd_label = 'Add Product';

  @Input() private currentProduct: any;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.currentProduct = { _id: '', designation: '', price: 0, category: '' };
  }

  onChangeDesignation() {
    if (this.currentProduct._id === '') {
      this.context = 'ADD';
       this.Btn_SaveAdd_label = 'Add Product';
    } else {
      this.context = 'UPDATE';
       this.Btn_SaveAdd_label = 'Update Product';
    }
  }

  addOrEdit(context, product) {
    switch (context) {
      case 'ADD':
        this.addCurrentProduct(product)

        break;
      case 'UPDATE':
        this.updateCurrentProduct(product);
        break;
    }
  }

  public updateCurrentProduct(theProduct) {
    let body = { designation: '', price: 0, category: '' };
    body.designation = theProduct.designation;
    body.price = theProduct.price;
    body.category = theProduct.category;
    this._productService
      .updateProduct('http://localhost:3000/products/' + theProduct._id, body)
      .subscribe(
      result => console.log(result),
      error => this.errorMessage = <any>error
      );

    this.currentProduct = { _id: '', designation: '', price: 0, category: '' };
  }

  public addCurrentProduct(theProduct) {
    let body = { designation: '', price: 0, category: '' };
    body.designation = theProduct.designation;
    body.price = theProduct.price;
    body.category = theProduct.category;
    this._productService
      .addProduct(body)
      .subscribe(
      result => console.log(result),
      error => this.errorMessage = <any>error
      );
    this.currentProduct = { _id: '', designation: '', price: 0, category: '' };
  }

}
