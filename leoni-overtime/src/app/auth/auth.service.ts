import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, delay, from, map, Observable, tap } from 'rxjs';
import { Preferences } from '@capacitor/preferences';

import { environment } from '../../environments/environment';
import { MessagesService } from '../shared/services/messages/messages.service';
import { AuthModel } from './auth.model';
import { SignalrService } from '../shared/services/signalr/signalr.service';


export interface AuthResponseData {
  ApiKey: string,
  EmployeeID: string,
  FullName: string
}

const AUTH_DATA = 'auth_data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user$ = new BehaviorSubject<AuthModel | null>(null);

  constructor(
    private http: HttpClient,
    private router: Router,
    private messageSrv: MessagesService,
    private signalrSrv: SignalrService
  ) { }

  /**
   * Returns an a observable that will eventually yield user or null depending
   * on whether we have logged in user or not
   *
   * @returns Observable
   */
  get user(): Observable<AuthModel | null> {
    return this.user$.asObservable().pipe(
        map(user => {
            if (user) {
                return user;
            } else {
                return null;
            }
        })
    );
  }

  /**
   * Returns an a observable that will eventually yield api key or null depending
   * on whether we have logged in user or not
   *
   * @returns Observable
   */
  get apiKey(): Observable<string | null> {

    return this.user$.asObservable().pipe(
      map(user => {
        if (user) {
            return user.apiKey;
        } else {
            return null;
        }
      })
    );

  }

  /**
   * Send request for sms login code
   *
   * @param  {string} employeeId
   * @returns Observable
   */
  preLogin(employeeId: string): Observable<string> {

    return this.http.get<string>(`${environment.apiUrl}/PreLogin/${employeeId}`).pipe(
      tap(console.log)
    );

  }

  /**
   * Login with sms code
   *
   * @param  {string} code
   * @returns Observable
   */
  login(code: string): Observable<AuthModel> {

    return this.http.get<AuthResponseData>(`${environment.apiUrl}/Login/${code}`).pipe(
      map(resData => {
        return new AuthModel(
          resData.FullName,
          resData.EmployeeID,
          resData.ApiKey
        );
      }),
      tap(user => {
        this.user$.next(user);
        this.setAuthData(user);
      })
    );

  }

  /**
   * Try to auto login user on can activate guard check
   *
   * @returns Observable
   */
  autoLogin(): Observable<AuthModel | null> {

    return from(this.getAuthData()).pipe(
      map((storedData: any) => {
        if (!storedData || !storedData.value) return null;
        return JSON.parse(storedData.value) as AuthModel;
      }),
      tap(user => {
        this.user$.next(user)
      })
    );

  }

  /**
   * Logout user, remove user data from local storage
   * and stop signalr conection
   *
   * @returns void
   */
  logout(): void {

    this.http.get(`${environment.apiUrl}/Logout`).subscribe({
      next: () => {
        this.user$.next(null);

        Preferences.remove({ key: AUTH_DATA });
        this.messageSrv.deleteErrors();

        this.signalrSrv.stopConnection();

        this.router.navigateByUrl('/login');
      },
      error: () => {
        this.user$.next(null);
        Preferences.remove({ key: AUTH_DATA });
        this.messageSrv.deleteErrors();
        this.router.navigateByUrl('/login');
      }
    });
  }

  /**
   * Save user data to local storage after successfull login
   *
   * @param  {AuthModel} user
   * @returns Promise
   */
  private async setAuthData(user: AuthModel): Promise<any> {

    await Preferences.set({
      key: AUTH_DATA,
      value: JSON.stringify(user),
    });

  }

  /**
   * Get logged in user data from local storage
   *
   * @returns Promise
   */
  private async getAuthData(): Promise<any> {

    return await Preferences.get({ key: AUTH_DATA });

  }

}
