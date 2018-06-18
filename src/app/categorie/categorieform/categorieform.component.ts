import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { CategorielistComponent } from '../categorielist/categorielist.component';
import { CategorieService } from '../../service/categorie.service';
import { Categorie } from '../../models/categorie';
import 'rxjs';

@Component({
  selector: 'app-categorieform',
  templateUrl: './categorieform.component.html',
  styleUrls: ['./categorieform.component.css']
})
export class CategorieformComponent implements OnInit {
  private context: String = 'ADD';
  private errorMessage: String = '';
  private Btn_SaveAdd_label = 'Add Categorie';

  
  @Input() private currentCategorie: any;

  constructor(private _categorieService: CategorieService) { }

  ngOnInit() {
    this.currentCategorie = { _id: '', categorieP: '', rayon: ''};
  }

  onChangeCategorie_P() {

    if (this.currentCategorie._id === '') {
      this.context = 'ADD';
       this.Btn_SaveAdd_label = 'Add Categorie';
    } else {
      this.context = 'UPDATE';
       this.Btn_SaveAdd_label = 'Update Categorie';
    }
  }

  addOrEdit(context, categorie) {
    switch (context) {
      case 'ADD':
        this.addCurrentCategorie(categorie)

        break;
      case 'UPDATE':
        this.updateCurrentCategorie(categorie);
        break;
    }
  }

  public updateCurrentCategorie(theCategorie) {
    let body = {  categorieP: '', rayon: ''};
    body.categorieP = theCategorie.categorieP;
    body.rayon = theCategorie.rayon;
    
    this._categorieService
      .updateCategories('http://localhost:3000/categories/' + theCategorie._id, body)
      .subscribe(
      result => console.log(result),
      error => this.errorMessage = <any>error
      );

    this.currentCategorie = { _id: '', categorieP: '', rayon: ''};
  }

  public addCurrentCategorie(theCategorie) {
    let body = {  categorieP: '', rayon: ''};
    body.categorieP = theCategorie.categorieP;
    body.rayon = theCategorie.rayon;
    
    this._categorieService
      .addCategories(body)
      .subscribe(
      result => console.log(result),
      error => this.errorMessage = <any>error
      );
    this.currentCategorie = { _id: '', categorieP: '', rayon: ''};
  }

}
