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
import { UserService } from './user.service';
import { AuthService } from './users/auth.service';
import { LoginFormComponent } from './users/login-form/login-form.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { ProfileComponent } from './users/profile/profile.component';
import { SignupFormComponent } from './users/signup-form/signup-form.component';
import { UsersModule } from './users/users.module';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthService] },
  { path: 'promotion', component: PromotionComponent, canActivate: [AuthService] },
  { path: 'catalogue', component: CatalogueComponent, canActivate: [AuthService] },
  { path: 'login', component: LoginFormComponent },
  { path: 'users', component: UserListComponent, canActivate: [AuthService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthService] },
  { path: 'signup', component: SignupFormComponent },
  { path: '**', redirectTo: 'login' }
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
    UsersModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
