import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, shareReplay, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessagesService } from '../../services/messages/messages.service';
import { RequestModel } from '../request/request.model';
import { RequestApiData } from '../request/request.service';

interface StatusApiData {
  Status: number,
  Description: string
}

@Injectable({
  providedIn: 'root'
})
export class ApprovalsService {

  private approvals$ = new BehaviorSubject<RequestModel[]>([]);
  approvals = this.approvals$.asObservable();

  private statuses$ = new BehaviorSubject<{status: number, description: string}[]>([]);
  statuses = this.statuses$.asObservable();

  constructor(
    private http: HttpClient,
    private messagesSrv: MessagesService
  ) {
    this.getStatuses().subscribe();
  }

  getMyApprovals() {

    return this.http.get<RequestApiData[]>(`${environment.apiUrl}/Employee/GetMyPendingApprovals`).pipe(
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
      tap(approvals => {
        this.approvals$.next(
          approvals.sort((a, b) => {
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

  updateStatus(request: { [key: string]: string | number }, oldStatus: number, newStatus: number) {

    const approvals = this.approvals$.getValue();
    const newApprovals = approvals.filter(a => a.id !== request.id);

    this.approvals$.next(newApprovals);

    return this.http.post(`${environment.apiUrl}/Employee/UpdateRequestStatus/${request.id}/${oldStatus}`, {
      RequestID: request.id,
      RequestStatus: newStatus
    }).pipe(
      catchError(err => {

        if (err.error.Message) {
          this.messagesSrv.showErrors(err.error.Message);
        } else if (err.status && err.statusText) {
          const message = err.status + ' ' + err.statusText;
          this.messagesSrv.showErrors(message);
        } else {
          this.messagesSrv.showErrors(err.message);
        }

        this.approvals$.next(approvals);

        return throwError(() => err);
      }),
      map(() => newApprovals)

    );

  }

  getStatuses() {

    return this.http.get<StatusApiData[]>(`${environment.apiUrl}/RequestData/GetAllRequestStatuses`).pipe(
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
      map(resData => {

        return resData.map(data => (({
          status: data.Status,
          description: data.Description
        })))
      }),
      tap(statuses => {
        this.statuses$.next(statuses);
      })
    );
  }

}
