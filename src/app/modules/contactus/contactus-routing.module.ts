import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from 'src/app/modules/contactus/contactus.component';
import { ContactUsEmailComponent } from 'src/app/modules/contactus/contactus-email.component';
import { ContactUsTelephoneComponent } from 'src/app/modules/contactus/contactus-telephone.component';


const routes: Routes = [
  {
    path: '',
    component: ContactUsComponent,
    children: [
      { path: 'email', component: ContactUsEmailComponent },
      { path: 'telephone', component: ContactUsTelephoneComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactUsRoutingModule { }
