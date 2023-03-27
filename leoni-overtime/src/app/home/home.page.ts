import { Component, OnInit } from '@angular/core';
import { ScreensizeService } from '../shared/services/screen-size/screen-size.service';

import { SignalrService } from '../shared/services/signalr/signalr.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  isDesktop$ = this.screenSizeSrv.isDesktopView();

  counts$ = this.signalrSrv.reqAppCount$;

  constructor(
    private screenSizeSrv: ScreensizeService,
    private signalrSrv: SignalrService
  ) { }

  ngOnInit() {}

}
