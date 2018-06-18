import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../../service/categorie.service';
import { Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination';
import { searchCategoriePipe } from '../../searche-categorie.pipe';
import { Categorie} from '../../models/categorie';
import { CurrencyPipe } from '@angular/common';



@Component({
  selector: 'app-categorielist',
  templateUrl: './categorielist.component.html',
  styleUrls: ['./categorielist.component.css']
})
export class CategorielistComponent implements OnInit {
  malist: any = new Array();
  categorie:Categorie = new Categorie('','','');

  private showform: Boolean = false;
  loading = false;
  p: number = 1;
  total: number = 0;
  currentSelection: number = 0;
  searchString: string = '';
  

  constructor(private _categorieService : CategorieService ) {

  }

  ngOnInit() {
    this._categorieService.getAllCategories().subscribe(data => {
      this.malist = data;
      this.malist.map((categorie) => {
        console.log('categorie',categorie);
      });

      console.log(data); 
    });
    this.total = this.malist.length;

  }


  edit(id) {
    this.categorie = this.malist.filter((p) => { return p._id === id; })[0];
    console.log('categorie in Edit Mode', this.categorie);
  }

  delete(id) {
    let p = this.malist.filter((p) => { return p._id === id; })[0];
    console.log('categorie in Delete Mode', this.categorie);
    this._categorieService.deleteCategories(p._id).subscribe((response) => console.log('Delete Categorie', response));
    this._categorieService.getAllCategories().subscribe(data => {
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

