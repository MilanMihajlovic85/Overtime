import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { ScreensizeService } from '../../services/screen-size/screen-size.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent  implements OnInit {

  isDesktop$ = this.screenSizeSrv.isDesktopView();

  user$ = this.authSrv.user.pipe(
    take(1)
  );


  constructor(
    private authSrv: AuthService,
    private screenSizeSrv: ScreensizeService
  ) { }

  ngOnInit() {}

}
