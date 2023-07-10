import {Component} from '@angular/core';
import { NgForm } from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {AuthResponseData} from "../../interfaces/authResponseData";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent  {
  isLoginMode: boolean = true;
  showSpinner: boolean = false;
  showPassword: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  switchLoginMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  switchShowPasswordIcon() {
    this.showPassword = !this.showPassword;
  }

  onSubmit(authForm: NgForm): void {
    if(!authForm.valid) return;
    this.showSpinner = true;
    const email: string = authForm.value.email;
    const password: string = authForm.value.password;
    let authObs: Observable<AuthResponseData>;


    if(this.isLoginMode) {
      authObs = this.authService.signIn(email, password);
    }else {
      authObs = this.authService.signUp(email, password);
    }

    authObs.subscribe({
      next: () => {
        this.showSpinner = false;
        void this.router.navigate(['/dashboard']);
      },
      error: error => {
        alert(error);
        this.showSpinner = false;
      }
    });
  }

}
