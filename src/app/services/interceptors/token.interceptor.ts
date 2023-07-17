import {Injectable} from "@angular/core";
import {HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest} from "@angular/common/http";
import {exhaustMap, take} from "rxjs";
import {AuthService} from "../auth.service";

@Injectable()
export class TokenInterceptor implements  HttpInterceptor {
  constructor(private authService: AuthService) {console.log('TokenInterceptor')}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user.pipe(take(1), exhaustMap(user => {
      if(!user) return next.handle(req);
      const modifiedReq = req.clone({
        params: new HttpParams().set('auth', user.token ? user.token : ''),
        headers: new HttpHeaders().set('Authorization ', user.token ? `Bearer ${user.token}` : '').set('Access-Control-Allow-Origin','*')
      });
      return next.handle(modifiedReq);
    }));
  }
}
