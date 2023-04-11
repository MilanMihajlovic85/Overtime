import { Component, OnInit } from '@angular/core';
import { ScreensizeService } from '../shared/services/screen-size/screen-size.service';

import { SignalrService } from '../shared/services/signalr/signalr.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  isDesktop$ = this.screenSizeSrv.isDesktopView();

  counts$ = this.signalrSrv.reqAppCount;

  constructor(
    private screenSizeSrv: ScreensizeService,
    private signalrSrv: SignalrService,
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.http.get('http://trening.vdsystem.rs:92/api/SginalRconnections').subscribe(resData => {

      console.table(resData);


    });
  }

}
