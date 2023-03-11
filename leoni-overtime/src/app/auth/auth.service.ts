import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { MessagesService } from '../shared/services/messages/messages.service';
import { environment } from '../../environments/environment';
import { BehaviorSubject, from, map, Observable, tap } from 'rxjs';
import { AuthModel } from './auth.model';
import { Preferences } from '@capacitor/preferences';
import { NavController } from '@ionic/angular';


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
    private navCtrl: NavController
  ) { }


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

  preLogin(employeeId: string) {

    return this.http.get<string>(`${environment.apiUrl}/PreLogin/${employeeId}`).pipe(
      tap(console.log)
    );

  }

  login(code: string) {

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

  autoLogin(): Observable<AuthModel | null> {

    return from(this.getAuthData()).pipe(
      map((storedData: any) => {
        if (!storedData || !storedData.value) return null;
        return JSON.parse(storedData.value) as AuthModel;
      }),
      tap(user => this.user$.next(user))
    );

  }

  logout() {

    this.http.get(`${environment.apiUrl}/Logout`).subscribe({
      next: () => {
        this.user$.next(null);

        Preferences.remove({ key: AUTH_DATA });
        this.messageSrv.deleteErrors();

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

  private async setAuthData(user: AuthModel) {

    await Preferences.set({
      key: AUTH_DATA,
      value: JSON.stringify(user),
    });

  }

  private async getAuthData() {

    return await Preferences.get({ key: AUTH_DATA });


  }
}
