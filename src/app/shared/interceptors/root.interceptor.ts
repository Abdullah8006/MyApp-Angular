import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpEvent } from "@angular/common/http/src/response";
import { Router } from "@angular/router";

@Injectable()
export class RootInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req.headers);
        console.log(req.body);
        console.log(req.method);
        return next.handle(req);
    }
}