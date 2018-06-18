import { Component, OnInit, Output, ViewChild, AfterViewInit, EventEmitter } from '@angular/core';
import { ListeAchatService } from '../../service/listeAchat.service';
import { ModalDirective } from 'ng2-bootstrap/modal';
import { ProductService } from '../../service/product.service';


@Component({
  selector: 'app-murlist',
  templateUrl: './murlist.component.html',
  styleUrls: ['./murlist.component.css']
})
export class MurlistComponent implements OnInit {
  mList: any = [];
  Total: any = [];
  catProduct: any = []; // list des produits parmis lequel on choisit un pour ajouter à la liste
  @ViewChild('lgModal') public lgModal: ModalDirective;
  @ViewChild('menuModal') public menuModal: ModalDirective;
  currentProduitChoisi = { designation: '', market: '', price: 0 };
  currenList: any = [];
  nomNouvelList: String = '';
  theUser = JSON.parse(localStorage.getItem('currentUser'));
  currentUser = {
    "id": this.theUser._id,
    "name": this.theUser.user_name,
    "ville": this.theUser.region
  }

  constructor(
    private murList: ListeAchatService,
    private productService: ProductService
  ) { }


  ngOnInit() {
    this.murList.getAllListeAchat()
      .subscribe(
        data => {
          //console.log(data);
          this.mList = data;
          console.log("mList : ", this.mList)
        }

      );
    this.productService.getAllProducts()
      .subscribe(data => {
        this.catProduct = data;

      })
    this.Total = new Array(this.mList.length);

    //console.log('current User',this.currentUser);

  }

  updateTotal(index) {

    console.log('mList', this.mList[index]);

    this.Total[index] = this.mList[index].items.map(item => {
      return item.qte * item.produit.price;
    })
      .reduce((total, l) => {
        return total + l;
      })

    console.log('Total', this.Total[index]);
  }

  delete(id) {
    let p = this.mList.filter((p) => { return p._id === id; })[0];
    this.murList.deleteListeAchat(p).subscribe((response) => console.log('Delete liste Achat', response));
    this.murList.getAllListeAchat().subscribe(data => {
      this.mList = data;
      console.log(data);
    });
  }

  ajouterProduit(index) {
    this.currenList = this.mList[index];
    console.log("currenList", this.currenList);
    this.lgModal.show();
  }

  updateProduitChoisi(produit) {
    this.currentProduitChoisi = produit;
    console.log("currentProductChoisi ", this.currentProduitChoisi);

  }

  addProductToList(currentProduitChoisi, qte) {
    var item = {
      "ord": String(this.mList.length + 1),
      "produit": {
        "designation": currentProduitChoisi.designation,
        "market": currentProduitChoisi.market,
        "price": currentProduitChoisi.price,
        "qte": 1
      }
    }
    this.currenList.items.push(item);
    this.lgModal.hide();
  }

  addListToMur() {
    this.menuModal.show();
  }
  ajouterNouvelleListe(nomNouvelList) {
    var newlist = {
      "label": nomNouvelList,
      date_creation: new Date(),
      owner: this.currentUser,
      items:[]
    }

    this.mList.push(newlist);
    this.menuModal.hide();  }

}
