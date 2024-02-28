import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './community/community.component';
import { CommunicationComponent } from './communication/communication.component';

const routes: Routes = [
  {path:"community",component:CommunityComponent},
  {path:"chat",component:CommunicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
