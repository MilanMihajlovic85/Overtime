import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { request } from 'http';
import { catchError, map, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { LoadingService } from '../shared/services/loading/loading.service';
import { MessagesService } from '../shared/services/messages/messages.service';
import { SignalrService } from '../shared/services/signalr/signalr.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // counts$ = this.loadingSrv.showLoaderUntilCompleted(
  //   this.http.get<{ NumberOfApprovals: number, NumberOfRequests: number }>(`${environment.apiUrl}/Employee/GetAllPendingsCount`).pipe(
  //     catchError(err => {
  //       if (err.error.Message) {
  //         this.messagesSrv.showErrors(err.error.Message);
  //       } else if (err.status && err.statusText) {
  //         const message = err.status + ' ' + err.statusText;
  //         this.messagesSrv.showErrors(message);
  //       } else {
  //         this.messagesSrv.showErrors(err.message);
  //       }
  //       return throwError(() => err);
  //     })
  //   )
  // );

  counts$ = this.signalrSrv.reqAppCount$;

  constructor(
    private http: HttpClient,
    private messagesSrv: MessagesService,
    private loadingSrv: LoadingService,
    private signalrSrv: SignalrService
  ) { }

  ngOnInit() {}

}
