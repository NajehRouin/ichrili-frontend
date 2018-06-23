import { Component, OnInit } from '@angular/core';
import { ListeAchatService } from '../../service/listeAchat.service';

const photo_url: String = 'http://localhost:3000/upload/';

@Component({
  selector: 'app-recieved-list',
  templateUrl: './recieved-list.component.html',
  styleUrls: ['./recieved-list.component.css']
})
export class RecievedListComponent implements OnInit {
  private recievedList=[];
  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor(private murListeAchatService:ListeAchatService) { }

  ngOnInit() {
    this.murListeAchatService.getAllListeAchatSherdByFriend(this.currentUser._id)
    .subscribe(result=>{
      //console.log("recieved List Shared By Friend :",result);
      this.recievedList=result;
    })

  }

  public getPhotoUrl(photoId){
    return photo_url+photoId;
  }

}
