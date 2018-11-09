import { Injectable } from '@angular/core';
import { log } from 'util';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { delay } from 'rxjs/Operators';
import { User } from 'src/app/modules/user/model/user.model';
import { HttpClient } from '@angular/common/http';
import { USER_POST } from 'src/app/shared/constants/url.constants';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    users: User[];

    constructor(private httpClient: HttpClient) {
        console.log("UserService being called");
    }

    getUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>(USER_POST);
    }

}