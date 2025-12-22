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
  adminId: string = 'USJBPQXbZ4P8zcVWJDovkYlair93';
  constructor(private authService: AuthService, public router: Router) {}

  ngOnInit(): void {
    this.authService.autoLogin();
    this.authService.user.subscribe(user => {
      this.user = user;
      this.isAdminUser = !!(user && user.id && user.id === this.adminId);
    });
  }
}
