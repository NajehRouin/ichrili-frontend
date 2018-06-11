import { Component, OnInit, Input } from '@angular/core';
import { Market,IPosition } from '../../models/market';
import { AgmMap } from '@agm/core';

@Component({
  selector: 'app-postion',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
    private pos:IPosition=new IPosition(0,0);
  @Input() private market: Market = new Market('','','','','',this.pos);
  lat: number;
  lng: number;
  title: string;
  zoom = 16;
  showMap: boolean =false;


  constructor() {
  }

  ngOnInit() {
    if (this.market.position.latitude && this.market.position.longitude) {
      this.lat = parseFloat(this.market.position.latitude.toLocaleString());
      this.lng = parseFloat(this.market.position.longitude.toLocaleString());
      this.showMap=true;
    }
    this.title = this.market.market_name;
  }

}
