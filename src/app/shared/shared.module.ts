import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';

import { ErrorModule } from "src/app/modules/error/error.module";
import { AuthGuardService } from "src/app/shared/guards/auth-guard.service";
import { AuthenticationService } from "src/app/shared/services/authentication.service";

@NgModule({
    imports: [
        BrowserModule, 
        CommonModule, 
        HttpClientModule, 
        ErrorModule,
        ReactiveFormsModule
    ],
    exports: [
        BrowserModule, 
        CommonModule, 
        HttpClientModule, 
        ErrorModule,
        ReactiveFormsModule
    ],
    providers: [AuthGuardService]
})
export class SharedModule {

}