import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../product.service';
import { TweenMax, Power4 } from 'gsap';

const image_url: String = 'http://localhost:3000/upload/';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  malist: any = new Array();
  produit: Product = new Product('', '', 0, '', 'default_product.png');

  constructor(private _productService: ProductService) {
  }

  ngOnInit() {
    this._productService.getAllProducts().subscribe(data => {
      this.malist = data;
      this.malist.map((product) => {
        console.log('product:', product);
        if (product.photo_url) {
          product.photo_url = image_url + product.photo_url;
        }
      })
      console.log(data);
    });
  }
  animateProduit() {
    TweenMax.from('img', 1, { alfa: 0, x:-50,y:+50,height: 0, width: 0, ease: Power4.easeOut });
   TweenMax.to('img', 1, { alfa: 1,x:+50,y:-50, height: 100, width: 100, ease: Power4.easeOut })
  }
}
