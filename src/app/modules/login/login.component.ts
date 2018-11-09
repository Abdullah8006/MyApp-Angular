import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { AuthenticationService } from "src/app/shared/services/authentication.service";
import { LoginRequest } from "src/app/modules/login/model/login-request";
import { Router } from "@angular/router";
import { forbiddenNameValidator } from "src/app/shared/directives/validators/forbidden-name.directive";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    private showErrorForAuth: boolean = false;
    private passwords: string[];
    private loginForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private authService: AuthenticationService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            password: ['', [
                Validators.required,
                Validators.minLength(8),
                forbiddenNameValidator
            ]]
        });

    }

    onSubmit() {
        let loginRequest: LoginRequest = { ...this.loginForm.value };
        if (this.authService.loginUser(loginRequest)) {
            return this.router.navigate(['dashboard']);
        } else {
            console.log("Error logging in user");
            this.showErrorForAuth = true;
        }
    }

    get email() {
        return this.loginForm.get('email');
    }

    get password() {
        return this.loginForm.get('password');
    }
}