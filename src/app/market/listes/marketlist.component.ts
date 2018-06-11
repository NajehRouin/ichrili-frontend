import { Component, OnInit } from '@angular/core';
import { MarketService } from '../../market.service';
import { Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchMarketPipe } from '../../search-market.pipe';
import { Market,IPosition} from '../../models/market';
import { CurrencyPipe } from '@angular/common';

const image_url: String = 'http://localhost:3000/upload/';

@Component({
  selector: 'app-marketlist',
  templateUrl: './marketlist.component.html',
  styleUrls: ['./marketlist.component.css']
})
export class MarketListeComponent implements OnInit {
  malist: any = new Array();
pos:IPosition=new IPosition(0,0);
  market:Market = new Market('','','','','default_product.png',this.pos);

  private showform: Boolean = false;
  loading = false;
  p: number = 1;
  total: number = 0;
  currentSelection: number = 0;
  searchString: string = '';
  

  constructor(private _marketService : MarketService  ) {

  }

  ngOnInit() {
    this._marketService.getAllMarkets().subscribe(data => {
      this.malist = data;
      this.malist.map((market) => {
       
        if (market.photo) {
          market.photo = image_url + market.photo;
        }
      })
      console.log(data);
    });
    this.total = this.malist.length;

  }


  edit(id) {
    this.market = this.malist.filter((p) => { return p._id === id; })[0];
    console.log('market in Edit Mode', this.market);
  }

  delete(id) {
    let p = this.malist.filter((p) => { return p._id === id; })[0];
    console.log('market in Delete Mode', this.market);
    this._marketService.deleteMarkets(p._id).subscribe((response) => console.log('Delete Market', response));
    this._marketService.getAllMarkets().subscribe(data => {
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
