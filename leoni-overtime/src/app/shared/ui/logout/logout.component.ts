import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent  implements OnInit {

  constructor(
    private authSrv: AuthService
  ) { }

  ngOnInit() {}

  /**
   * Logout user
   */
  onLogout() {
    this.authSrv.logout();
  }

}
