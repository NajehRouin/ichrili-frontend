import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url:'http://localhost:3000/upload'});
  constructor() { }

  ngOnInit() {
  }

}
