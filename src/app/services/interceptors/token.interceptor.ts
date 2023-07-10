import {Injectable} from "@angular/core";
import {HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from "@angular/common/http";
import {exhaustMap, take} from "rxjs";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Injectable()
export class TokenInterceptor implements  HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user.pipe(take(1), exhaustMap(user => {
      if(!user) return next.handle(req);
      const modifiedReq = req.clone({
        params: new HttpParams().set('auth', user.token ? user.token : '')
      });
      const checkUrl: boolean = this.router.url.includes('login');
      return next.handle(checkUrl ? modifiedReq: req);
    }));
  }
}
