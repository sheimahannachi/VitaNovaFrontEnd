import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateFrontComponent } from './front-office/all-template-front/all-template-front.component';
import { AllTemplateBackComponent } from './back-office/all-template-back/all-template-back.component';
import { AddProductComponent } from './Component/add-product/add-product.component';
import { ShowProductComponent } from './Component/show-product/show-product.component';
import { UpdateProductComponent } from './Component/update-product/update-product.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowProductUserComponent } from './front-office/Component/show-product-user/show-product-user.component';
const routes: Routes = [

{path:"",
component:AllTemplateFrontComponent},

{path:"admin",
component:AllTemplateBackComponent},

{path:"addProduct",
component: AddProductComponent},
{path:"showProduct",
component: ShowProductComponent},
{ path: 'updateProduct/:id', 
component: UpdateProductComponent },

{path:"showProductUser",
component: ShowProductUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule, FormsModule],
  exports: [RouterModule],
 

})
export class AppRoutingModule { }
