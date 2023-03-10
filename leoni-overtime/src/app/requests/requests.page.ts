import { Component, OnInit } from '@angular/core';
import { switchMap, tap } from 'rxjs';
import { RequestService } from '../shared/data-store/request/request.service';
import { LoadingService } from '../shared/services/loading/loading.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit {

  requests$ = this.loadingSrv.showLoaderUntilCompleted(
    this.requestSrv.getMyRequests()
  ).pipe(
    switchMap(() => this.requestSrv.requests),
    tap(resData => {

      console.log(resData);

    })
  );


  constructor(
    private requestSrv: RequestService,
    private loadingSrv: LoadingService
  ) { }

  ngOnInit() {

    console.log('OnInit');


    this.requests$.subscribe();

  }

}
