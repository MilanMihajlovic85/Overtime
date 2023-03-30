import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({ providedIn: 'root' })
export class ApiKeyHttpInterceptor implements HttpInterceptor {

    constructor(
        private authSrv: AuthService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      return this.authSrv.apiKey.pipe(
            take(1),
            switchMap(apiKey => {

              // console.log(apiKey);


                let clone = req.clone();

                if (apiKey) {
                  clone = clone.clone({ headers: req.headers.set('ApiKey', apiKey) });
                }

                if (!clone.headers.has('enctype')) {
                  clone.clone({ headers: req.headers
                    .set('Content-Type', 'application/json')
                   });
                }

                return next.handle(clone);
            })
      );

    }
}

export const ApiKeyHttpInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiKeyHttpInterceptor,
    multi: true
};
