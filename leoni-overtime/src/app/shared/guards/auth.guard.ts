import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, of, switchMap, take } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authSrv: AuthService,
    private router: Router
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
          if (!user) this.router.navigateByUrl('/login');
          return !!user;
        })
      );

  }

}
