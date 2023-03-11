import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, of, switchMap, take } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private authSrv: AuthService,
    private location: Location
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.authSrv.user.pipe(
        take(1),
        switchMap(user => {
          if (user) {
            return of(user);
          } else {
            return this.authSrv.autoLogin();
          }
        }),
        map(user => {
          if (state.url === '/login' && user) this.location.back();
          return !user;
        })
      );

  }

}
