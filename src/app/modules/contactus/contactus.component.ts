import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  template: `
    <div>
    <a [routerLink]="['email']">Email</a>
    <a [routerLink]="['telephone']">Telephone</a>
    <router-outlet></router-outlet>
  </div>
    `
})
export class ContactUsComponent { }
