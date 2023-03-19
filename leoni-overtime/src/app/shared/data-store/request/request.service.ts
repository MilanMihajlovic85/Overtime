import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, shareReplay, tap, throwError } from 'rxjs';
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

interface ProjectApiData {
  Id: number,
  WorkOrganization: string,
  Project: string,
  Description: string
}

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private requests$ = new BehaviorSubject<RequestModel[]>([]);
  requests = this.requests$.asObservable();

  constructor(
    private http: HttpClient,
    private messagesSrv: MessagesService,
    private datePipe: DatePipe
  ) { }

  // getResultsPaginated(url: string) {

  //   return this.http.get<RequestApiData[]>(`http://localhost:3000/reports${url}`).pipe(
  //   // return this.http.get<RequestApiData[]>(`${environment.apiUrl}/Employee/GetMyRequests`).pipe(
  //     map(resData => resData.map(data => ({
  //       id: data.ID,
  //       requestorId: data.Requestor_ID,
  //       requestorWO: data.Requestor_WO,
  //       requestorFullName: data.Requestor_FullName,
  //       requestorWOManager: data.Requestor_WO_Manager,
  //       requestorDepartment: data.Requestor_Department,
  //       requestorForWO: data.Requestor_For_WO,
  //       requestorForProject: data.Requestor_For_Project,
  //       reason: data.Reason,
  //       startTime: new Date(data.Start_Time),
  //       endTime: new Date(data.End_Time),
  //       minutes: data.Minutes,
  //       status: data.Status,
  //       responseDate: data.ResponseDate ? new Date(data.ResponseDate) : null,
  //       createdAt: new Date(data.CreateDate)
  //       } as RequestModel))
  //     ),
  //     catchError(err => {

  //       if (err.status && err.statusText) {
  //         const message = err.status + ' ' + err.statusText;
  //         this.messagesSrv.showErrors(message);
  //       } else {
  //         this.messagesSrv.showErrors(err.message);
  //       }

  //       return throwError(() => err);
  //     }),
  //     // tap(requests => {
  //     //   this.requests$.next(
  //     //     requests.sort((a, b) => {
  //     //       if (a.createdAt < b.createdAt)
  //     //         return 1;
  //     //       if (a.createdAt > b.createdAt)
  //     //         return -1;
  //     //       return 0;
  //     //     })
  //     //   );
  //     // }),
  //     shareReplay()
  //   );
  // }

  /**
   * Get all logged in user requests
   *
   * @returns Observable
   */
  getMyRequests(): Observable<RequestModel[]> {

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

  /**
   * Create new requests
   *
   * @param  {string} projectId
   * @param  {string} reason
   * @param  {Date} start
   * @param  {Date} end
   * @returns Observable
   */
  createRequest(projectId: string, reason: string, start: Date, end: Date): Observable<RequestModel> {

    return this.http.post<RequestApiData>(`${environment.apiUrl}/Employee/CreateRequest`, {
        Reason: reason,
        Project_ID: projectId,
        StartTime: this.datePipe.transform(start, 'yyyy-MM-dd HH:mm:ss'),
        EndTime: this.datePipe.transform(end, 'yyyy-MM-dd HH:mm:ss')
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
        return throwError(() => err);
      }),
      map(resData => {

        return new RequestModel(
          resData.ID,
          resData.Requestor_ID,
          resData.Requestor_WO,
          resData.Requestor_FullName,
          resData.Requestor_WO_Manager,
          resData.Requestor_Department,
          resData.Requestor_For_WO,
          resData.Requestor_For_Project,
          resData.Reason,
          new Date(resData.Start_Time),
          new Date(resData.End_Time),
          resData.Minutes,
          resData.Status,
          resData.ResponseDate ? new Date(resData.ResponseDate) : null,
          new Date(resData.CreateDate)
        );
      })
    );
  }


  /**
   * Delete requests
   *
   * @param  {number} id
   * @returns Observable
   */
  deleteRequest(id: number) {

    const requests = this.requests$.getValue();
    const newRequests = requests.filter(d => d.id !== id);

    this.requests$.next(newRequests);

    return this.http.delete(`${environment.apiUrl}/Employee/DeleteRequest/${id}`, {}).pipe(
      catchError(err => {

        this.requests$.next(requests);

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
      map(() => newRequests)
    );

  }

  /**
   * Get projects for work organization
   *
   * @returns {}
   */
  getWOProjects(): Observable<{[key: string]: {} | string}[]> {

    return this.http.get<ProjectApiData[]>(`${environment.apiUrl}/RequestData/GetAllProjectsForWO`).pipe(
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
          id: data.Id,
          workOrganization: data.WorkOrganization,
          project: data.Project,
          descriptipn: data.Description
        })))
      })
    );
  }
}
