import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllTemplateBackComponent} from "./back-office/all-template-back/all-template-back.component";
//import {AllTemplateFrontComponent} from "./FrontOffice/all-template-front/all-template-front.component";
import {AddexerciseComponent} from "./addExercise/addexercise.component";

const routes: Routes = [
  /*{
    path:"",
    component:AllTemplateFrontComponent
  },*/
  {
    path:"admin",
    component:AllTemplateBackComponent, children: [
      {
        path: "exercise",
        component: AddexerciseComponent,
      }]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
