import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, shareReplay, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessagesService } from '../../services/messages/messages.service';
import { RequestModel } from './request.model';

export interface RequestApiData {
  ID: number,
  Requestor_ID: string,
  Requestor_WO: string,
  Requestor_FullName: string,
  Requestor_WO_Manager: string,
  Requestor_Manager: string,
  Requestor_Department: string,
  Requestor_For_WO: string,
  Requestor_For_Project: string,
  Reason: string,
  Start_Time: string,
  End_Time: string,
  Minutes: number,
  Status: string,
  ResponseDate: string,
  CreateDate: string
}

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private requests$ = new BehaviorSubject<RequestModel[]>([]);
  requests = this.requests$.asObservable();

  constructor(
    private http: HttpClient,
    private messagesSrv: MessagesService
  ) { }

  getMyRequests() {

    return this.http.get<RequestApiData[]>(`${environment.apiUrl}/Employee/GetMyRequests`).pipe(
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
        status: data.Status,
        responseDate: data.ResponseDate ? new Date(data.ResponseDate) : null,
        createdAt: new Date(data.CreateDate)
        } as RequestModel))
      ),
      catchError(err => {

        if (err.status && err.statusText) {
          const message = err.status + ' ' + err.statusText;
          this.messagesSrv.showErrors(message);
        } else {
          this.messagesSrv.showErrors(err.message);
        }

        return throwError(() => err);
      }),
      tap(requests => {
        this.requests$.next(
          requests.sort((a, b) => {
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
