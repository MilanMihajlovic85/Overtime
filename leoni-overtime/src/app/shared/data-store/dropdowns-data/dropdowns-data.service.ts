import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessagesService } from '../../services/messages/messages.service';

interface apiData {
  Value: string,
  Description: string
}

class DataModel {
  constructor(
    public value: string,
    public description: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class DropdownsDataService {

  private projects$ = new BehaviorSubject<DataModel[]>([]);
  projects = this.projects$.asObservable();

  private organizations$ = new BehaviorSubject<DataModel[]>([]);
  organizations = this.organizations$.asObservable();

  private departments$ = new BehaviorSubject<DataModel[]>([]);
  departments = this.departments$.asObservable();

  constructor(
    private http: HttpClient,
    private messagesSrv: MessagesService
  ) {}


  /**
   * Get data for dropdown lists
   *
   * @param  {string} type
   * @returns Observable
   */
  getData(type: string): Observable<DataModel[]> {

    return this.http.get<apiData[]>(`${environment.apiUrl}/RequestData/DataDriven_DDL_${type}`).pipe(
      map(resData => resData.map(data => ({
          value: data.Value,
          description: data.Description
        } as DataModel))
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
      })
    );
  }

}
