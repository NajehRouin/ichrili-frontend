import { Component, NgZone, Inject, EventEmitter, Input, OnInit } from '@angular/core';
import { NgUploaderOptions, UploadedFile, UploadRejected } from 'ngx-uploader';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  @Input() private currentProduct: any = {};
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
      data:  { productId: this.currentProduct._id},
      autoUpload: false,
      fieldName: 'photo',
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
    this.options.data = { produitId: this.currentProduct._id };
  }
}


