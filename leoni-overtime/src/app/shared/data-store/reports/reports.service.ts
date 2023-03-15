import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, shareReplay, tap, throwError } from 'rxjs';
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
    private messagesSrv: MessagesService,
    private datePipe: DatePipe
  ) { }


  getReports(url: string) {

    console.log(url);


    return this.http.get<RequestApiData[]>(`${environment.apiUrl}${url}`).pipe(
    tap(d => console.log(d)),
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

      console.log(err);

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

  myRequests(from: Date, to: Date, rows: number, page: number) {

    const startDate = this.datePipe.transform(from, 'yyyy-MM-dd');
    const endDate = this.datePipe.transform(to, 'yyyy-MM-dd');

    return this.http.get<RequestApiData[]>(
        `${environment.apiUrl}/Reports/MyRequestsFromHistory/${startDate}/${endDate}/${rows}/${page}`
      ).pipe(
      tap(d => console.log(d)),
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

  projects(from: Date, to: Date, project: string) {

    const startDate = this.datePipe.transform(from, 'yyyy-MM-dd');
    const endDate = this.datePipe.transform(to, 'yyyy-MM-dd');

    return this.http.get<RequestApiData[]>(`${environment.apiUrl}/Reports/ProjectFromHistory/${project}/${startDate}/${endDate}/100`).pipe(
      tap(d => console.log(d)),
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

  organizations(from: Date, to: Date, organization: string) {

    const startDate = this.datePipe.transform(from, 'yyyy-MM-dd');
    const endDate = this.datePipe.transform(to, 'yyyy-MM-dd');

    return this.http.get<RequestApiData[]>(`${environment.apiUrl}/Reports/WOFromHistory/${organization}/${startDate}/${endDate}/100`).pipe(
      tap(d => console.log(d)),
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

  departments(from: Date, to: Date, department: string) {

    const startDate = this.datePipe.transform(from, 'yyyy-MM-dd');
    const endDate = this.datePipe.transform(to, 'yyyy-MM-dd');

    return this.http.get<RequestApiData[]>(`${environment.apiUrl}/Reports/DepartmentFromHistory/${department}/${startDate}/${endDate}/100`).pipe(
      tap(d => console.log(d)),
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
