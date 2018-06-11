import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { ListeComponent } from '../liste/liste.component';
import { MesListeService } from '../../meslistes.service';
import { Melistes } from '../../models/mesliste';
import 'rxjs';


@Component({
  selector: 'app-meslistes',
  templateUrl: './meslistes.component.html',
  styleUrls: ['./meslistes.component.css']
})
export class MeslisteComponent implements OnInit {
  private context: String = 'ADD';
  private errorMessage: String = '';
  private Btn_SaveAdd_label = 'Add liste';
   private Mliste:any;
  private d:Date =new Date();
  @Input() private currentMesListe: any;

  constructor(private _mesListeService: MesListeService) { }

  ngOnInit() {

      this.currentMesListe = { _id: '', libelle: '', date:this.d, shared:'',status };
  }
 
  onChangeLibelle() {

    if (this.currentMesListe._id === '') {
      this.context = 'ADD';
       this.Btn_SaveAdd_label = 'Add Mesliste';
    } else {
      this.context = 'UPDATE';
       this.Btn_SaveAdd_label = 'Update Meliste';
    }
  }

  addOrEdit(context, mesliste) {
    switch (context) {
      case 'ADD':
        this.addCurrentMesliste(mesliste)

        break;
      case 'UPDATE':
        this.updateCurrentMesliste(mesliste);
        break;
    }
  }

  public updateCurrentMesliste(theMesliste) {
    let body = { libelle: '', date:this.d, shared:'',status:'' };
    body.libelle = theMesliste.libelle;
    body.date = theMesliste.date;
    body.shared = theMesliste.shared;
    body.status=theMesliste.status;
    this._mesListeService
      .updateMeslists('http://localhost:3000/meslistes/' + theMesliste._id, body)
      .subscribe(
      result => console.log(result),
      error => this.errorMessage = <any>error
      );

      this.currentMesListe = { _id: '', libelle: '', date:this.d, shared:'',status:'' };
  }

  public addCurrentMesliste(theMesliste) {
    let body = { libelle: '', date:this.d, shared:'',status:'' };
    body.libelle = theMesliste.libelle;
    body.date = theMesliste.date;
    body.shared = theMesliste.shared;
    body.status=theMesliste.status;
    this._mesListeService.addMeslists(body)
      .subscribe(
      result => console.log(result),
      error => this.errorMessage = <any>error
      );
      this.currentMesListe = { _id: '', libelle: '', date:this.d, shared:'',status:'' };
  }

}
