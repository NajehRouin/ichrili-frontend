import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { ProduitlistComponent } from '../produitlist/produitlist.component';
import { ProductSpeService } from '../../service/productspe.service';
import { Productspe } from '../../models/productspe';
import 'rxjs';






@Component({
  selector: 'app-produitform',
  templateUrl: './produitform.component.html',
  styleUrls: ['./produitform.component.css']
})
export class ProduitformComponent implements OnInit {
  private context: String = 'ADD';
  private errorMessage: String = '';
  private Btn_SaveAdd_label = 'Add ProductSpe';
  

  @Input() private currentProductSp: any;

  constructor(private _productspService: ProductSpeService
   ) { }

  ngOnInit() {
    
    
 
    this.currentProductSp = { _id: '',label:'', description: '', BudgetMin: 0 , BudgetMax: 0 };
  }

  onChangeLabel() {
    if (this.currentProductSp._id === '') {
      this.context = 'ADD';
       this.Btn_SaveAdd_label = 'Add ProductSpe';
    }
  }

  add(context, productsp) {
    switch (context) {
      case 'ADD':
        this.addCurrentProductSp(productsp)

        break;
      
    }
  }



  public addCurrentProductSp(theProductsp) {
    let body = {  label:'',description: '', BudgetMin: 0, BudgetMax: 0 };
    body.label=theProductsp.label;
    body.description = theProductsp.description;
    body.BudgetMin = theProductsp.BudgetMin;
    body.BudgetMax = theProductsp.BudgetMax;
    
    this._productspService
      .addProductspe(body)
      .subscribe(
      result => console.log(result),
      error => this.errorMessage = <any>error
      );
    this.currentProductSp = { _id: '',label:'', description: '', BudgetMin: 0, BudgetMax: 0 };
  }
  

}
