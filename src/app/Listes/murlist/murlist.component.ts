import { Component, OnInit } from '@angular/core';
import { ListeAchatService } from '../../listeAchat.service';

@Component({
  selector: 'app-murlist',
  templateUrl: './murlist.component.html',
  styleUrls: ['./murlist.component.css']
})
export class MurlistComponent implements OnInit {
  mList: any = [];
  constructor(private murList: ListeAchatService) { }

  ngOnInit() {
    this.murList.getAllListeAchat()
      .subscribe(
        data => {
          console.log(data);
          this.mList = data;

        }
      );



  }

  updateTotal($event) {
    /*
    this.mList.map(l => {
      var total = l.qte * l.produit.price;
    })
    this.mList.reduce(0,(t,x)=>{
      t+x
    })
    */
  }
}
