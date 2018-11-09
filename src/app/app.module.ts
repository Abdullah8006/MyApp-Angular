import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ErrorModule } from 'src/app/modules/error/error.module';
import { LandingModule } from 'src/app/modules/landing/landing.module';
import { AboutUsModule } from 'src/app/modules/aboutus/aboutus.module';
import { UserModule } from 'src/app/modules/user/user.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardModule } from 'src/app/modules/dashboard/dashboard.module';
import { LoginModule } from 'src/app/modules/login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    ErrorModule,
    LandingModule,
    AboutUsModule,
    UserModule,
    SharedModule,
    DashboardModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
