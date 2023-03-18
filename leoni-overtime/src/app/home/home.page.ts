import { Component, OnInit } from '@angular/core';

import { SignalrService } from '../shared/services/signalr/signalr.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  counts$ = this.signalrSrv.reqAppCount$;

  constructor(
    private signalrSrv: SignalrService
  ) { }

  ngOnInit() {}

}
