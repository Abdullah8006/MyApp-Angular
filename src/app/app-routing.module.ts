import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactUsComponent } from 'src/app/modules/contactus/contactus.component';
import { ErrorComponent } from 'src/app/modules/error/error.component';
import { ContactUsRoutingModule } from 'src/app/modules/contactus/contactus-routing.module';
import { LandingComponent } from 'src/app/modules/landing/landing.component';
import { AboutUsComponent } from 'src/app/modules/aboutus/aboutus.component';
import { UserComponent } from 'src/app/modules/user/user.component';
import { AuthGuardService } from 'src/app/shared/guards/auth-guard.service';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { LoginComponent } from 'src/app/modules/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'aboutus', component: AboutUsComponent, canActivate: [AuthGuardService] },
  { path: 'users', component: UserComponent },
  { path: 'contactus', loadChildren: './modules/contactus/contactus.module#ContactusModule' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
