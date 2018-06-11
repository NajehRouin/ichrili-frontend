
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination';
import { MesListeService } from '../../meslistes.service';
import { Melistes } from '../../models/mesliste';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { isDate } from 'util';



@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  malist: any = new Array();
 d: Date = new Date( ) ;
  L:Melistes = new Melistes('','',this.d,false,false);

  private showform: Boolean = false;
  loading = false;
  p: number = 1;
  total: number = 0;
  currentSelection: number = 0;
  searchString: string = '';
  

  constructor(private _mesListeService : MesListeService  ) {

  }

  ngOnInit() {
    this._mesListeService.getAllMeslists().subscribe(data => {
      this.malist = data;
      this.malist.map((mesliste) => {
       
      
      })
      console.log(data);
    });
    this.total = this.malist.length;

  }


  edit(id) {
    this.L = this.malist.filter((p) => { return p._id === id; })[0];
   
  console.log(this.L.libelle,' in edit mode ');
 
  }

  delete(id) {
    let p = this.malist.filter((p) => { return p._id === id; })[0];
    console.log('mesliste in Delete Mode', this.L);
    this._mesListeService.deleteMeslists(p._id).subscribe((response) => console.log('Delete Melistes', response));
    this._mesListeService.getAllMeslists().subscribe(data => {
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
