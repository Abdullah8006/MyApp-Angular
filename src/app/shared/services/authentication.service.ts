import { Injectable } from "@angular/core";
import { LoginRequest } from "src/app/modules/login/model/login-request";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    loggedIn: boolean = false;

    isUserLoggedIn(): boolean {
        return this.loggedIn;
    }

    loginUser(loginRequest: LoginRequest): boolean {
        if (loginRequest.email === 'abeiy4u@gmail.com' && loginRequest.password === 'password123') {
            this.loggedIn = true;
            return true;
        }
        this.loggedIn = false;
        return false;
    }

}