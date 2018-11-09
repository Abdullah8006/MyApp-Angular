import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactUsComponent } from 'src/app/modules/contactus/contactus.component';
import { ContactUsEmailComponent } from 'src/app/modules/contactus/contactus-email.component';
import { ContactUsTelephoneComponent } from 'src/app/modules/contactus/contactus-telephone.component';
import { RouterModule } from '@angular/router';
import { ContactUsRoutingModule } from 'src/app/modules/contactus/contactus-routing.module';


@NgModule({
  declarations: [
    ContactUsComponent,
    ContactUsEmailComponent,
    ContactUsTelephoneComponent
  ],
  imports: [
    RouterModule,
    ContactUsRoutingModule
  ]
})
export class ContactusModule { }
