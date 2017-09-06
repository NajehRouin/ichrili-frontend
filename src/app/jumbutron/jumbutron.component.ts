import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

const image_url: String = 'http://localhost:3000/upload/';

@Component({
  selector: 'app-jumbutron',
  templateUrl: './jumbutron.component.html',
  styleUrls: ['./jumbutron.component.css']
})
export class JumbutronComponent implements OnInit {
    private malist: any = new Array();
  constructor(private _productService:ProductService) { }

  ngOnInit() {
    this._productService.getAllProducts().subscribe(data => {
      this.malist = data;
      this.malist.map((product) => {
        //console.log('product:', product);
        if (product.photo_url) {
          product.photo_url = image_url + product.photo_url;
        }
      })
      //console.log(data);
    });
  }

}
