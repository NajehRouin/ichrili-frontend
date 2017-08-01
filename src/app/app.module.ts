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

import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { PromotionComponent } from './promotion/promotion.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'promotion', component: PromotionComponent },
  { path: 'catalogue', component: CatalogueComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductlistComponent,
    ProductformComponent,
    FileUploadComponent,
    SearchProductPipe,
    JumbutronComponent,
    CatalogueComponent,
    PromotionComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgUploaderModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
