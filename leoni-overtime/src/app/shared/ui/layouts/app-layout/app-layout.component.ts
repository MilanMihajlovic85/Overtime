import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { shareReplay, take, tap } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Platform } from '@angular/cdk/platform';
import { BreakpointObserver } from '@angular/cdk/layout';

import { AuthService } from 'src/app/auth/auth.service';
import { LoadingService } from 'src/app/shared/services/loading/loading.service';
import { I18nService } from 'src/app/shared/services/i18n/i18n.service';
import { SignalrService } from 'src/app/shared/services/signalr/signalr.service';
import { DateAdapter } from '@angular/material/core';
import { ScreensizeService } from 'src/app/shared/services/screen-size/screen-size.service';


@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
  providers: [LoadingService]
})
export class AppLayoutComponent  implements OnInit {

  isDesktop = false;
  lastPing!: Date;
  private previousAuthState = false;

  user$ = this.authSrv.user.pipe(
    take(1),
    shareReplay(),
    tap(user => {

      if (!user && this.previousAuthState !== !!user) {
        this.router.navigateByUrl('/login');
      }

      this.previousAuthState = !!user;      

      if (!!user) {

        this.signalrSrv.createConnection(user.apiKey);

        this.idle.watch();
      } else {
        this.idle.stop();
      }

    })
  );

  counts$ = this.signalrSrv.reqAppCount;


  constructor(
    private authSrv: AuthService,
    private router: Router,
    private idle: Idle,
    private keepalive: Keepalive,
    private translate: TranslateService,
    private i18n: I18nService,
    private signalrSrv: SignalrService,
    private dateAdapter: DateAdapter<any>,
    private screensizeSrv: ScreensizeService,
    private breakpointObserver: BreakpointObserver,
    private platform: Platform,

  ) {
    // this.setIdleTimer();
    i18n.language().subscribe(language => {
      translate.use(language);

      if (this.translate.currentLang === 'sr') {
        this.dateAdapter.setLocale('sr-Latn');
      } else {
        this.dateAdapter.setLocale('en-GB');
      }

    });

   }

  ngOnInit() {

    this.breakpointObserver.observe(['(max-width: 992px)']).subscribe(res => {

      const isMob = this.platform.IOS || this.platform.ANDROID;

      this.screensizeSrv.setSize(res.matches || isMob);

      this.isDesktop = !(res.matches || isMob);

    });

  }

  /**
   * Logout user
   */
  onLogout() {
    this.authSrv.logout();
  }

  /**
   * set timer to logout user after 15 min
   */
  // private setIdleTimer() {
  //   // Documentation https://github.com/moribvndvs/ng2-idle#readm
  //   // Tutorial https://blog.bitsrc.io/how-to-implement-idle-timeout-in-angular-af61eefdb13b

  //   // Sets an idle timeout of 899 seconds.
  //   this.idle.setIdle(899);
  //   // Sets a timeout period of 1 seconds. after 900 seconds of inactivity, the user will be considered timed out.
  //   this.idle.setTimeout(1);
  //   // Sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
  //   this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

  //   this.idle.onIdleEnd.subscribe(() => this.idle.watch());
  //   this.idle.onTimeout.subscribe(() => this.authSrv.logout());

  //   // Sets the ping interval to 15 seconds
  //   this.keepalive.interval(15);

  //   this.keepalive.onPing.subscribe(() => this.lastPing = new Date());

  // }

}
