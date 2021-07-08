import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from '../modules/general/contact/map/map.component';
import { MailingComponent } from '../modules/general/contact/mailing/mailing.component';


const routes:Routes = [
  {path:'web', component:MapComponent },
  {path:'java', component:MailingComponent }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ]
})
export class TechRoutingModule { }
export const routingComponents = [MapComponent,MailingComponent]
