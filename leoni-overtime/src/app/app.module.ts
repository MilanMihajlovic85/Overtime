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
import { MessagesService } from './shared/services/messages/messages.service';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { ApiKeyHttpInterceptorProvider } from './shared/interceptors/api-key.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    LoginLayoutComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    LoadingModule,
    MessagesModule,
    NgIdleKeepaliveModule.forRoot()
  ],
  providers: [
    ApiKeyHttpInterceptorProvider,
    MessagesService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
