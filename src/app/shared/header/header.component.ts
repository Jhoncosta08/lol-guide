import {Component, Input} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '.././css-effects/hover-effects.css']
})
export class HeaderComponent {
  @Input() isAdminUser: boolean = false;
  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}
