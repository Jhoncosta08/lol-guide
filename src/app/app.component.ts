import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAdminUser: boolean = false;
  user: any;
  adminId: string = 'UbRHQT1O85RPvPmM4Zsoz4c7ba32';
  constructor(private authService: AuthService, public router: Router) {}

  ngOnInit(): void {
    this.authService.autoLogin();
    this.authService.user.subscribe(user => {
      this.user = user;
      if(user && user.id && user.id === this.adminId)  this.isAdminUser = true;
    });
  }
}
