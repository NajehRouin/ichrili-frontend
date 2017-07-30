import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductService } from './product.service';
import { ProductformComponent } from './productform/productform.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { NgUploaderModule } from 'ngx-uploader';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchProductPipe } from './search-product.pipe';
import { JumbutronComponent } from './jumbutron/jumbutron.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductlistComponent,
    ProductformComponent,
    FileUploadComponent,
    SearchProductPipe,
    JumbutronComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgUploaderModule,
    NgxPaginationModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
