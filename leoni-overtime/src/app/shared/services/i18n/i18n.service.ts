import { Injectable } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { BehaviorSubject, from, map, Observable, of, shareReplay, tap } from 'rxjs';
import { Preferences } from '@capacitor/preferences';
import * as english from "../../../../assets/i18n/en.json";



@Injectable({
  providedIn: 'root'
})
export class I18nService {

  private language$ = new BehaviorSubject<string>('en');



  constructor(
    private translate: TranslateService
  ) {
    translate.setTranslation('en', english);
    translate.setDefaultLang('en');
  }


  /**
   * Return selected language value
   *
   * @returns Observable
   */
  language(): Observable<any> {

    // return from(Preferences.get({ key: 'language' })).pipe(
    //   map((resData: any) => {
    //     if (resData && resData.value === 'sr') return 'sr';
    //     return 'en';
    //   }),
    //   tap(language => {
    //     this.language$.next(language);
    //   })
    // );

    return of('null').pipe(
      map(() => {
        return 'en';
      }),
      tap(language => {
        this.language$.next(language);
      })
    );

  }

  setLanguage(language: string) {

    this.language$.next(language);
    // localStorage.setItem('language', language);

    Preferences.set({ key: 'language', value: language });

  }

  /**
   * Return translated key value schema for object properties
   * or translated pdf title
   *
   * @param  {string[]|string} properties
   * @returns Observable
   */
  translateProperties(properties: string[] | string): Observable<any> {

    return this.translate.get(properties).pipe(
      map(resData => {

        if (typeof properties !== 'string') {

          const translatedProperties: {[key: string]: string} = {};

          for (const key in resData) {
            if (Object.prototype.hasOwnProperty.call(resData, key)) {
              translatedProperties[resData[key]] = key;
            }
          }

          return translatedProperties;

        }

        return resData;


      })
    );

  }


}

