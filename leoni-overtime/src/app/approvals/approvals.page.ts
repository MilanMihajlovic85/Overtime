import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { switchMap, tap } from 'rxjs';
import { ApprovalsService } from '../shared/data-store/approvals/approvals.service';
import { RequestModel } from '../shared/data-store/request/request.model';
import { LoadingService } from '../shared/services/loading/loading.service';

@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.page.html',
  styleUrls: ['./approvals.page.scss'],
})
export class ApprovalsPage implements OnInit {

  approvals!: RequestModel[];

  buttons: {[key: string]: any} = {
    updateStatus: { modal: 'updateStatus', icon: 'manage_accounts', color: 'primary', mobileIcon: 'create', mobileColor: 'secondary', tooltip: 'btn.updateStatus' }
  };

  schema = {
    properties: ['requestorFullName', 'status', 'minutes', 'reason', 'startTime', 'endTime', 'requestorDepartment', 'requestorWO','requestorWOManager', 'requestorForWO', 'requestorForProject', 'createdAt'],
    title: ['requestorFullName'],
    subtitle: ['requestorDepartment']
  }


  approvals$ = this.loadingSrv.showLoaderUntilCompleted(
    this.approvalSrv.getMyApprovals()
  ).pipe(
    switchMap(() => this.approvalSrv.approvals),
    tap(resData => {
      this.approvals = resData;
    })
  );

  constructor(
    private approvalSrv: ApprovalsService,
    private loadingSrv: LoadingService,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {}

  openActionSheet(event: {modal: string, data: {[key: string]: string}, mobile?: boolean}) {

    this.presentAlert(event.data);

  }

  async presentAlert(request: { [key: string]: string }) {

    const newStatus = await this.presentActionSheet();

    if (newStatus) {

      if (newStatus === 2) {

        const alert = await this.alertCtrl.create({
          header: 'Set request duration',
          buttons: ['Approve'],
          inputs: [
            {
              // type: 'number',
              value: request.minutes,
            }
          ],
        });

        await alert.present();

        const result = await alert.onDidDismiss();

        if (result.data) {
          const minutes: any = Object.values(result.data.values)[0];

          this.approvalSrv.updateStatus(+request.id, newStatus, minutes);
        }


      } else {

        this.approvalSrv.updateStatus(+request.id, newStatus);

      }



    }


  }

  async presentActionSheet() {

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Change Request Status',
      // subHeader: 'Example subheader',
      buttons: [
        {
          text: 'Decline',
          role: 'destructive',
          data: {
            action: 3,
          },
        },
        {
          text: 'Approve',
          data: {
            action: 2,
          },
        },
        {
          text: 'Cancel',
          role: 'cancel'
        },
      ],
    });

    await actionSheet.present();
    const actionResult = await actionSheet.onDidDismiss();

    return actionResult.data ? actionResult.data.action : null;

  }


}
