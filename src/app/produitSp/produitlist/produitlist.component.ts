
import { Component, OnInit } from '@angular/core';

import { Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination';
import { Productspe } from '../../models/productspe';
import { ProductSpeService } from '../../productspe.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-produitlist',
  templateUrl: './produitlist.component.html',
  styleUrls: ['./produitlist.component.css']
})
export class ProduitlistComponent implements OnInit {
  malist: any = new Array();
  
  produitsp: Productspe = new Productspe('', '','',0,0);
  private showform: Boolean = false;
  loading = false;
  p: number = 1;
  total: number = 0;
  currentSelection: number = 0;
  searchString: string = '';

  constructor(private _productspService: ProductSpeService) {

  }

  ngOnInit() {
 
    
  }




  displayForm() {
    console.log('before:', this.showform);
    this.showform = !this.showform;
    console.log('after:', this.showform);
  }

  
}
