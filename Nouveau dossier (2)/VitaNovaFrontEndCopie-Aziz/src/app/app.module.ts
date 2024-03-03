import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './front-office/navbar/navbar.component';
import { FooterComponent } from './front-office/footer/footer.component';
import { AllTemplateFrontComponent } from './front-office/all-template-front/all-template-front.component';
import { NavBarBackComponent } from './back-office/nav-bar-back/nav-bar-back.component';
import { AllTemplateBackComponent } from './back-office/all-template-back/all-template-back.component';
import { FooterBackComponent } from './back-office/footer-back/footer-back.component';
import { ShowProductComponent } from './Component/show-product/show-product.component';
import { AddProductComponent } from './Component/add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DeleteProductComponent } from './Component/delete-product/delete-product.component';
import { UpdateProductComponent } from './Component/update-product/update-product.component';
import { ShowProductUserComponent } from './front-office/Component/show-product-user/show-product-user.component';
import { CartPrComponent } from './front-office/Component/cart-pr/cart-pr.component';
import { SideBarBackComponent } from './back-office/side-bar-back/side-bar-back.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AllTemplateFrontComponent,
    
    NavBarBackComponent,
    AllTemplateBackComponent,
    FooterBackComponent,
    ShowProductComponent,
    AddProductComponent,
    DeleteProductComponent,
    UpdateProductComponent,
    ShowProductUserComponent,
    CartPrComponent,
    SideBarBackComponent,

   
    
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
