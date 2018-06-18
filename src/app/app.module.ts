import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmMap } from '@agm/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductService } from './service/product.service';
import{MarketService} from './service/market.service'
import{MarketListeComponent} from './market/listes/marketlist.component' ;
import{MarketformComponent}from './market/form/marketform.component';
import {PositionComponent} from './market/posiotion/position.component';
import { ProductformComponent } from './productform/productform.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import{FileMarketComponent} from './file-market/file-market.component';
import { NgUploaderModule } from 'ngx-uploader';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchProductPipe } from './search-product.pipe';
import {searchCategoriePipe} from './searche-categorie.pipe';
import { JumbutronComponent } from './jumbutron/jumbutron.component';
import {SearchMarketPipe} from './search-market.pipe';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { PromotionComponent } from './promotion/promotion.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './service/user.service';

import { AuthService } from './users/auth.service';
import { LoginFormComponent } from './users/login-form/login-form.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { ProfileComponent } from './users/profile/profile.component';
import { SignupFormComponent } from './users/signup-form/signup-form.component';
import { SendingInvitationComponent} from './users/sending-invitation/sending-invitation.component';
import { UsersModule } from './users/users.module';
import{CategorielistComponent} from './categorie/categorielist/categorielist.component';
import{CategorieformComponent} from'./categorie/categorieform/categorieform.component';
import{CategorieService} from'./service/categorie.service'
import{ProduitlistComponent} from './produitSp/produitlist/produitlist.component';
import {ProductSpeService} from './service/productspe.service';
import{ProduitformComponent} from './produitSp/produitform/produitform.component';
import {ListeComponent} from './Listes/liste/liste.component';
import {MeslisteComponent} from './Listes/formliste/meslistes.component';
import { MesListeService } from './service/meslistes.service';
import {AlertComponent} from './alert/alert.component';
import {AlertService } from './service/alert.service';
import {UpdateFormComponent} from './users/update/updateform/form.component';
import  {UpdateComponent} from './users/update/updateliste/updateliste.component';
import {AchatlisteComponent} from './Listes/listeAchat/Achatliste/Achat.component';
import {FormaAchatComponent} from './Listes/listeAchat/formaAchat/formaAchat.component';
import {ListeAchatService} from './service/listeAchat.service';
import { MurlistComponent } from './Listes/murlist/murlist.component';
import { FormuListeComponent } from './Listes/murlist/formu-liste/formu-liste.component';
import { ModalModule } from 'ng2-bootstrap/modal';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthService] },
  { path: 'promotion', component: PromotionComponent, canActivate: [AuthService] },
  { path: 'catalogue', component: CatalogueComponent, canActivate: [AuthService] },
  { path: 'productlist', component: ProductlistComponent , canActivate: [AuthService] },
  { path: 'marketlist', component:MarketListeComponent , canActivate: [AuthService] },
  { path: 'categorielist', component:CategorielistComponent , canActivate: [AuthService] },
  { path: 'sendinvit', component: SendingInvitationComponent, canActivate: [AuthService] },
  { path: 'login', component: LoginFormComponent },
  {path: 'PrSpecial', component: ProduitlistComponent, canActivate: [AuthService]},
  { path: 'users', component: UserListComponent, canActivate: [AuthService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthService] },

  
  {path : 'listAchat' , component:MurlistComponent,canActivate:[AuthService]},
  {path:'setting',component :UpdateComponent,canActivate:[AuthService] },
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
    MarketListeComponent,
    MarketformComponent,
    CategorielistComponent,
    CategorieformComponent,
    SearchMarketPipe,
    FileMarketComponent,
    searchCategoriePipe,
    ProduitlistComponent,
    ProduitformComponent,
    PositionComponent,
    ListeComponent,
    MeslisteComponent,
    AlertComponent,
    UpdateComponent,
    UpdateFormComponent,
    FormaAchatComponent,
    AchatlisteComponent,
    MurlistComponent,
    FormuListeComponent
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgUploaderModule,
    NgxPaginationModule,
    UsersModule,
    RouterModule.forRoot(routes),
    ModalModule.forRoot()
  ],
  providers: [ProductService, UserService,MarketService,CategorieService
    ,ProductSpeService,MesListeService,AlertService ,ListeAchatService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
