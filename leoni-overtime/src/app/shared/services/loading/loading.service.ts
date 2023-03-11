import { Injectable } from '@angular/core';
import { BehaviorSubject, concatMap, finalize, Observable, of, tap } from 'rxjs';

@Injectable( )
export class LoadingService {

  private loadingSub$ = new BehaviorSubject<boolean>(false);

  loading$: Observable<boolean> = this.loadingSub$.asObservable();


  showLoaderUntilCompleted<T>(obs$: Observable<T>): Observable<T> {
    return of(null).pipe(
      tap(() => {this.loadingOn()}),
      concatMap(() => obs$),
      finalize(() => this.loadingOff())
    );
  }

  loadingOn() {
    this.loadingSub$.next(true);
  }

  loadingOff() {
    this.loadingSub$.next(false);
  }

}
