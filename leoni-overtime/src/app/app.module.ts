import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutComponent } from './shared/ui/layouts/app-layout/app-layout.component';
import { LoginLayoutComponent } from './shared/ui/layouts/login-layout/login-layout.component';
import { MessagesModule } from './shared/ui/messages/messages.module';
import { LoadingModule } from './shared/ui/loading/loading.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesService } from './shared/services/messages/messages.service';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { ApiKeyHttpInterceptorProvider } from './shared/interceptors/api-key.interceptor';
import { DatePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    LoginLayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot({
      platform: {
        /** The default `desktop` function returns false for devices with a touchscreen.
        * This is not always wanted, so this function tests the User Agent instead.
        **/
        'desktop': (win) => {
          const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(win.navigator.userAgent);
          return !isMobile;
        }
      },
    }),
    AppRoutingModule,
    HttpClientModule,
    LoadingModule,
    MessagesModule,
    NgIdleKeepaliveModule.forRoot(),
    TranslateModule.forRoot(),
    MatNativeDateModule
  ],
  providers: [
    DatePipe,
    ApiKeyHttpInterceptorProvider,
    MessagesService,
    { provide: MAT_DATE_LOCALE, useValue: 'sr-Latn' },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
