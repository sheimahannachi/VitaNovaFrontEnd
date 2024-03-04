import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AllTemplateBackComponent} from "./back-office/all-template-back/all-template-back.component";
import {FooterBackComponent} from "./back-office/footer-back/footer-back.component";
import {SideBarBackComponent} from "./back-office/side-bar-back/side-bar-back.component";
import {NavBarBackComponent} from "./back-office/nav-bar-back/nav-bar-back.component";
import {AddexerciseComponent} from "./addExercise/addexercise.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarBackComponent,
    SideBarBackComponent,
    FooterBackComponent,
    AllTemplateBackComponent,
    AddexerciseComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
