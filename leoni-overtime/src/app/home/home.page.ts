import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, catchError, delay, map, Observable, shareReplay, tap, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { LoadingService } from '../shared/services/loading/loading.service';
import { MessagesService } from '../shared/services/messages/messages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  counts$ = this.loadingSrv.showLoaderUntilCompleted(
    this.http.get<{ NumberOfApprovals: number, NumberOfRequests: number }>(`${environment.apiUrl}/Employee/GetAllPendingsCount`).pipe(
      catchError(err => {
        if (err.error.Message) {
          this.messagesSrv.showErrors(err.error.Message);
        } else if (err.status && err.statusText) {
          const message = err.status + ' ' + err.statusText;
          this.messagesSrv.showErrors(message);
        } else {
          this.messagesSrv.showErrors(err.message);
        }
        return throwError(() => err);
      })
    )
  );

  constructor(
    private http: HttpClient,
    private messagesSrv: MessagesService,
    private loadingSrv: LoadingService
  ) { }

  ngOnInit() {

    this.http.get<{[key: string]: number | string}[]>(`${environment.apiUrl}/Statistics/GetCumulativeStatisticsForWO/WRSMA/2023-03-01/2023-03-14`).pipe(
      catchError(err => {

        console.log(err.error.Message);

        let msg!: string;

        if (err.error.Message) {
          this.messagesSrv.showErrors(err.error.Message);
        } else if (err.status && err.statusText) {
          const message = err.status + ' ' + err.statusText;
          this.messagesSrv.showErrors(message);
        } else {
          this.messagesSrv.showErrors(err.message);
        }

        return throwError(() => err);
      }),
    ).subscribe(console.log);

    this.http.get<{[key: string]: number | string}[]>(`${environment.apiUrl}/Statistics/GetCumulativeStatisticsForDepartment/IWO RS MA P1/2023-03-01/2023-03-14`).subscribe(console.log);

  }

}
