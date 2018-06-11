import { Component, NgZone, Inject, EventEmitter, Input, OnInit } from '@angular/core';
import { NgUploaderOptions, UploadedFile, UploadRejected } from 'ngx-uploader';


@Component({
  selector: 'app-file-market',
  templateUrl: './file-market.component.html',
  styleUrls: ['./file-market.component.css']
})
export class FileMarketComponent implements OnInit {
  @Input() private currentMarket: any = {};
  @Input() private options: NgUploaderOptions;
  response: any;
  sizeLimit: number = 5000000; // 1MB
  previewData: any;
  errorMessage: string;
  inputUploadEvents: EventEmitter<string>;
constructor( @Inject(NgZone) private zone: NgZone) {
    this.options = new NgUploaderOptions({
      url: 'http://localhost:3000/upload',
      filterExtensions: true,
      allowedExtensions: ['jpg', 'png', 'jpeg'],
      maxSize: 2097152,
      data:  { marketId: this.currentMarket._id},
      autoUpload: false,
      fieldName: 'phot',
      fieldReset: true,
      maxUploads: 2,
      method: 'POST',
      previewUrl: true,
      withCredentials: false
    });
    this.inputUploadEvents = new EventEmitter<string>();
  }

  startUpload() {
    this.inputUploadEvents.emit('startUpload');
  }

  beforeUpload(uploadingFile: UploadedFile): void {
    if (uploadingFile.size > this.sizeLimit) {
      uploadingFile.setAbort();
      this.errorMessage = 'File is too large!';
    }

  }
handleUpload(data: any) {
    setTimeout(() => {
      this.zone.run(() => {
        this.response = data;
        if (data && data.response) {
          this.response = JSON.parse(data.response);
        this.errorMessage = this.response.err_desc;
        }
      });
    });
  }

  handlePreviewData(data: any) {
    this.previewData = data;
  }

  ngOnInit() {
    this.options.data = { marketId: this.currentMarket._id };
  }
}


