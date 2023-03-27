import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreensizeService {

  private isDesktop$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  /**
   * Set 'isDesktop' behavior subject
   *
   * @param value
   */
  setSize(value: boolean) {

    this.isDesktop$.next(!value);

  }

  /**
   * Return if it's desktop view value as observable
   */
  isDesktopView(): Observable<boolean> {

    return this.isDesktop$.asObservable().pipe(
      distinctUntilChanged(),
      shareReplay()
    );

  }

}
