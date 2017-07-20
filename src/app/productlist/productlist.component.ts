import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  malist=null;
  constructor(private _productService:ProductService) { }

  ngOnInit() {
   this.malist= this._productService.getAllProducts().subscribe(data => {
        this.malist = data;
        console.log(data);
      });
    console.log(this.malist, '    fired productlist.component.ts');
  }

  public edit(index){
    console.log(this.malist[index]);
    //alert(this.malist[index]._id,' ');
  }

}
