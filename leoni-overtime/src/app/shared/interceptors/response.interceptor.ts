import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({ providedIn: 'root' })
export class HttpResponseInterceptor implements HttpInterceptor {

    constructor(
        private authSrv: AuthService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      return next.handle(req).pipe(
        // proceed when there is a response; ignore other events
        filter((event) => event instanceof HttpResponse),
        tap({
          error: (error) => {
            if(error.status === 401) this.authSrv.logout();
          }
        })
      );

    }
}

export const HttpResponseInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpResponseInterceptor,
    multi: true
};
