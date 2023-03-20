import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, shareReplay, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessagesService } from '../../services/messages/messages.service';
import { RequestModel } from '../request/request.model';
import { RequestApiData } from '../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private reports$ = new BehaviorSubject<RequestModel[]>([]);
  reports = this.reports$.asObservable();

  constructor(
    private http: HttpClient,
    private messagesSrv: MessagesService
  ) { }

  /**
   * Get reports
   *
   * @param  {string} url
   * @returns Observable
   */
  getReports(url: string): Observable<RequestModel[]> {

    // return this.http.get<RequestApiData[]>(`http://localhost:3000/reports${url}`).pipe(
    return this.http.get<RequestApiData[]>(`${environment.apiUrl}${url}`).pipe(
      map(resData => resData.map(data => ({
        id: data.ID,
        requestorId: data.Requestor_ID,
        requestorWO: data.Requestor_WO,
        requestorFullName: data.Requestor_FullName,
        requestorWOManager: data.Requestor_WO_Manager,
        requestorDepartment: data.Requestor_Department,
        requestorForWO: data.Requestor_For_WO,
        requestorForProject: data.Requestor_For_Project,
        reason: data.Reason,
        startTime: new Date(data.Start_Time),
        endTime: new Date(data.End_Time),
        minutes: data.Minutes,
        status: +data.Status === 2 ? 'Approved' : 'Declined',
        responseDate: new Date(data.ResponseDate),
        createdAt: new Date(data.CreateDate)
        } as RequestModel))
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
      tap(reports => {
        this.reports$.next(
          reports.sort((a, b) => {
            if (a.createdAt < b.createdAt)
              return 1;
            if (a.createdAt > b.createdAt)
              return -1;
            return 0;
          })
        );
      }),
      shareReplay()
    );

  }

}
