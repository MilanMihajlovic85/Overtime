import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActionPerformed, CancelOptions, LocalNotifications } from '@capacitor/local-notifications';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LocalNotificationsService {

  constructor(
    private translate: TranslateService,
    private router: Router
  ) { }

  /**
   * Initialize notifications and add action performed listener
   *
   * @returns Promise
   */
  async setNotifications(): Promise<any> {

    await LocalNotifications.requestPermissions().catch(error => console.log(error));

    LocalNotifications.registerActionTypes({
      types: [
        {
          id: 'OVERTIME_MSG',
          actions: [
            {
              id: 'view',
              title: this.translate.instant('btn.open')
            },
            {
              id: 'remove',
              title: this.translate.instant('btn.dismiss'),
              destructive: true
            }
          ]
        }
      ]
    });

    LocalNotifications.addListener('localNotificationActionPerformed', (notificationAction: ActionPerformed) => {

      if (notificationAction.actionId === 'view') {

        this.router.navigateByUrl('/dashboard');

      }

    })



  }

  /**
   * Set local notifications for received request
  *
  * @returns Promise
  */
 async presentNotifications(): Promise<any> {

   await LocalNotifications.schedule({
      notifications: [
        {
          title: this.translate.instant('messagess.newRequestMsgTitle'),
          body: this.translate.instant('messagess.newRequestMsg'),
          id: 1,
          extra: {
            data: 'Pass data to your handler'
          },
          iconColor: "#0f3b89",
          smallIcon: "ic_stat_icon_config_sample",
          actionTypeId: 'OVERTIME_MSG',
          attachments: [
            { id: 'face', url: 'res://public/assets/Leoni_Msg.jpg' }

          ]
        }
      ]
    });

  }

  /**
   * Cancel scheduled notifications
   */
  cancelNotifications() {

    let option: CancelOptions = {
      notifications: [{
        id: 1
      }]
    }

    LocalNotifications.cancel(option);

  }

}
