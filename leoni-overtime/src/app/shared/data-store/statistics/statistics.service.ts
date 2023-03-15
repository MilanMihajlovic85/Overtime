import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, shareReplay, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessagesService } from '../../services/messages/messages.service';
import { StatisticsModel } from './statistics.model';

export interface StatisticsApiData {
  Department: string,
  Hours: number,
  NumberOfRequests: number,
  Status: number,
  WorkOrganization: string
}

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  private statistics$ = new BehaviorSubject<StatisticsModel[]>([]);
  statistics = this.statistics$.asObservable();

  constructor(
    private http: HttpClient,
    private messagesSrv: MessagesService,
    private datePipe: DatePipe
  ) { }


  getStatistics(url: string) {

    return this.http.get<StatisticsApiData[]>(`${environment.apiUrl}${url}`).pipe(
    tap(d => console.log(d)),
    map(resData => resData.map(data => ({
      department: data.Department,
      hours: data.Hours,
      requestsNum: data.NumberOfRequests,
      status: data.Status,
      organization: data.WorkOrganization
      } as StatisticsModel))
    ),
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
    }),
      shareReplay()
    );


  }

}
