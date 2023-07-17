import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  constructor(private router: Router) {
  }

  redirectToUrl(routerPath: string): void {
    void this.router.navigate([`${routerPath}`]);
  }

}
