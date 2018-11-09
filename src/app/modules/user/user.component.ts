import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/modules/user/user.service';
import { User } from 'src/app/modules/user/model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  fetching: boolean;
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log('UserComponent called');
    this.fetching = true;
    this.userService.getUsers().subscribe(c => {
      this.fetching = false;
      this.users = c;
    });
  }

}
