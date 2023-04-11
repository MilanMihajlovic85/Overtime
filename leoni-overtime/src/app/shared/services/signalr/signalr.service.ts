import { Injectable } from '@angular/core';
import { ActionPerformed, LocalNotifications, LocalNotificationSchema } from '@capacitor/local-notifications';
import { Platform } from '@ionic/angular';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { BehaviorSubject, shareReplay, Subject, take, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { LocalNotificationsService } from '../local-notifications/local-notifications.service';
import { MessagesService } from '../messages/messages.service';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  private connection!: HubConnection;

  private reqAppCount$ = new BehaviorSubject<{approvals: number, requests: number}>({
    approvals: 0, requests: 0
  });

  reqAppCount = this.reqAppCount$.asObservable().pipe(shareReplay());

  constructor(
    private messagesSrv: MessagesService,
    private localNotificationSrv: LocalNotificationsService,
    private platform: Platform
  ) { }

  async createConnection(apiKey: string) {

    if (!this.platform.is('desktop')) {
      await this.localNotificationSrv.setNotifications();
    }

    this.connection = new HubConnectionBuilder()
    .withUrl(environment.hubUrl + "?ApiKey=" + apiKey)
    .withAutomaticReconnect()
    .build();

  this.connection.start()
    .catch((error: any) => {
      // console.log(error);
      this.messagesSrv.showErrors(error);
  });

  this.connection.on('notify', (count: string) => {

    const data = JSON.parse(count);

    console.table(data)

    const currentValues = this.reqAppCount$.getValue();
    // const appDiff = count.NumberOfApprovals - currentValues.approvals;

    if (!this.platform.is('desktop')) this.localNotificationSrv.presentNotifications();

    this.reqAppCount$.next({approvals: data.NumberOfApprovals, requests: data.NumberOfRequests});

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
    //     this.localNotificationSrv.presentNotifications();
    //   }

    //   this.reqAppCount.next({approvals: newApprovals, requests: newRequests});
    // }, 5000);

  }

  signalRObservable(apiKey: string) {



    // Establishes a Hub Connection
    this.connection = new HubConnectionBuilder()
    .withUrl(environment.hubUrl + "?ApiKey=" + apiKey)
    .withAutomaticReconnect()
    .build();

    console.log('T');

    const subject: Subject<any> = new Subject<any>();

    subject.next('TEST');
    // Starts the connection.
    this.connection.start().then(() => {

      // On reciving an event when the hub method 'notify' is invoked
      this.connection.on('notify', (count: {approvals: number, requests: number}) => {
        // Multicast the event.
        console.log('SignalR: ', count);

        // subject.next(count);

        // this.reqAppCount$.next(count);

      });
    });






    // When the connection is closed.
    this.connection.onclose((err?: Error) => {
      if (err) {
          // An error occurs
          this.reqAppCount$.error(err);
      } else {
          // No more events to be sent.
          this.reqAppCount$.complete();
      }
    });

    // To be subscribed to by multiple components
    return subject.asObservable();

  }




  stopConnection() {

    this.connection.stop().then(() => {
      this.localNotificationSrv.cancelNotifications();
    }).catch((error: any) => console.log(error));

  }

}
