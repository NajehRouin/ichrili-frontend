import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { ListeAchatService } from '../../../service/listeAchat.service';
@Component({
  selector: 'app-formu-liste',
  templateUrl: './formu-liste.component.html',
  styleUrls: ['./formu-liste.component.css']
})
export class FormuListeComponent implements OnInit {
  @Input() private currentListeAchata: any;
  private errorMessage: String = '';
  constructor(private maList: ListeAchatService) { }

  ngOnInit() {

    //this.currentListeAchata = { _id: '', label: '', items:[{produit:{designation:'',market:'',price:0},qte:0}]};
  }

/*
  public addCurrentListeA(theListe) {
    let body = { label: '', items:[{produit:{designation:'',market:'',price:0},qte:0}]};
    
    body.label = theListe.label;
    body.items=theListe.items;
    
   
  
    this.maList
      .addListeAchat(body)
      .subscribe(
        result => console.log(result),
        error => this.errorMessage = <any>error
      );
      this.currentListeAchata = { _id: '', label: '', items:[{produit:{designation:'',market:'',price:0},qte:0}]};
  }*/

}

