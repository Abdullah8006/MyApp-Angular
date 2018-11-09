import { Component } from '@angular/core';
import { AuthGuardService } from 'src/app/shared/guards/auth-guard.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'my-app';

  constructor(private authenticationService: AuthenticationService) { }

  isUserLoggedIn(): boolean {
    return this.authenticationService.isUserLoggedIn();
  }

}
