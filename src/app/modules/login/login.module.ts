import { NgModule } from "@angular/core";
import { LoginComponent } from "src/app/modules/login/login.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule {

}