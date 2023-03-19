import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
// import * as signalR from '@microsoft/signalr';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

import { BehaviorSubject, shareReplay, take, tap } from 'rxjs';
// import { AuthService } from 'src/app/auth/auth.service';
import { environment } from 'src/environments/environment';
import { MessagesService } from '../messages/messages.service';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  private connection!: HubConnection;

  private reqAppCount = new BehaviorSubject<{approvals: number, requests: number}>({
    approvals: 0, requests: 0
  });

  reqAppCount$ = this.reqAppCount.asObservable().pipe(shareReplay());

  constructor(
    private toastCtrl: ToastController,
    private messagesSrv: MessagesService
  ) { }

  public createConnection(apiKey: string) {

    this.connection = new HubConnectionBuilder()
      .withUrl(environment.hubUrl, {
        accessTokenFactory: () => apiKey
      })
      .withAutomaticReconnect()
      .build();

    this.connection.start()
      .catch((error: any) => {
        console.log(error);
        this.messagesSrv.showErrors(error);
      });

    this.connection.on('notify', (count: {NumberOfApprovals: number, NumberOfRequests: number}) => {

      const currentValues = this.reqAppCount.getValue();
      const appDiff = count.NumberOfApprovals - currentValues.approvals;

      if (appDiff > 0) this.presentToast(appDiff);

      this.reqAppCount.next({approvals: count.NumberOfApprovals, requests: count.NumberOfRequests});

    });

    // setInterval(() => {
    //   const currentValues = this.reqAppCount.getValue();
    //   const newRequests = currentValues.requests + Math.round(Math.random()*10);
    //   const newApprovals = currentValues.approvals + Math.round(Math.random()*10);

    //   const reqDiff = newRequests - currentValues.requests;
    //   const appDiff = newApprovals - currentValues.approvals;

    //   // console.log('Req - ', 'new: ', newRequests, ' old: ', currentValues.requests, ' diff: ', reqDiff);
    //   // console.log('App - ', 'new: ', newApprovals, ' old: ', currentValues.approvals, ' diff: ', appDiff);
    //   if (appDiff > 0) {
    //     this.presentToast(appDiff);
    //   }



    //   this.reqAppCount.next({approvals: newApprovals, requests: newRequests});
    // }, 5000);


  }

  stopConnection() {

    this.connection.stop().catch((error: any) => console.log(error));
  }

  presentToast(appDiff: number) {

    this.toastCtrl.create({
      message: `You have ${appDiff} new ${appDiff === 1 ? 'request' : 'requests'} for approval`,
      duration: 3000,
      position: 'bottom',
      icon: 'notifications',
      cssClass: 'notification-toast'
    }).then(toast => toast.present());

  }
}
