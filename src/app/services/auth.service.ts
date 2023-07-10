import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Endpoints } from "../endpoints";
import {AuthResponseData} from "../interfaces/authResponseData";
import {BehaviorSubject, catchError, Observable, tap, throwError} from "rxjs";
import {UserModel} from "../models/userModel";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<UserModel | null>(null);
  private tokenExpirationTimer: any;

  constructor(
    private http: HttpClient,
    private route: Router
  ) {
  }

  private errorHandling(error: HttpErrorResponse) {
    let errorMessage: string = 'An unknown error occurred!';
    switch (error.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already.';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct';
        break;
    }
    return throwError(() => errorMessage);
  }

  createNewUserData(resData: any): void {
    const expirationDate = new Date(new Date().getTime() + resData.expiresIn * 1000 );
    const user = new UserModel(resData.email, resData.localId, resData.idToken, expirationDate);
    this.user.next(user);
    this.autoLogout(resData.expiresIn * 1000);
    localStorage.setItem('user', JSON.stringify(user));
  }

  signIn(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(Endpoints.signInApi(), {email: email, password: password, returnSecureToken: true})
      .pipe(
        catchError(err => this.errorHandling(err)),
        tap(resData => this.createNewUserData(resData))
      );
  }

  signUp(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(Endpoints.signUpApi(), {email: email, password: password, returnSecureToken: true})
      .pipe(
        catchError(err => this.errorHandling(err)),
        tap(resData => this.createNewUserData(resData))
      );
  }

  autoLogin(): void {
    const user: {
      email: string,
      id: string,
      _token: string,
      _tokenExpirationData: string
    } = JSON.parse(localStorage.getItem('user') || '{}');
    if(!user) return;
    const loadedUser = new UserModel(user.email, user.id, user._token, new Date(user._tokenExpirationData));
    if(loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration = new Date(user._tokenExpirationData).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }

  }

  logout(): void {
    this.user.next(null);
    localStorage.clear();
    void this.route.navigate(['/login']);
    if(this.tokenExpirationTimer) clearTimeout(this.tokenExpirationTimer);
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number): void {
    this.tokenExpirationTimer = setTimeout(() => this.logout(), expirationDuration);
  }

}
