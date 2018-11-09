import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router/src/interfaces";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthenticationService } from "src/app/shared/services/authentication.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router
    ) { }

    canActivate(): boolean {
        console.log("canActivate being run");
        if (!this.authenticationService.isUserLoggedIn()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }

}
