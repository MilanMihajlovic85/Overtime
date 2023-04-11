import { Component, OnInit, ViewChild } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core/components';
import { MatTableDataSource } from '@angular/material/table';
import { ActionSheetController, AlertController, IonModal, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { switchMap, tap } from 'rxjs';
import { ApprovalsService } from '../shared/data-store/approvals/approvals.service';
import { RequestModel } from '../shared/data-store/request/request.model';
import { LoadingService } from '../shared/services/loading/loading.service';
import { ScreensizeService } from '../shared/services/screen-size/screen-size.service';
import { ChangeStatusComponent } from './change-status/change-status.component';

@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.page.html',
  styleUrls: ['./approvals.page.scss'],
})
export class ApprovalsPage implements OnInit {

  isDesktop!: boolean;

  isDesktop$ = this.screenSizeSrv.isDesktopView().pipe(
    tap(resData => this.isDesktop = resData)
  );

  approvalsData = new MatTableDataSource<RequestModel>([]);

  buttons: {[key: string]: any} = {
    updateStatus: { modal: 'updateStatus', icon: 'task', color: 'primary', mobileIcon: 'create', mobileColor: 'secondary', tooltip: 'btn.updateStatus' }
  };

  desktopSchema = {
    properties: ['requestorFullName', 'requestorDepartment', 'requestorWO', 'requestorForWO', 'requestorForProject', 'requestorWOManager', 'minutes', 'startTime', 'endTime', 'createdAt', 'reason'],
    noSearch: true
  };

  schema = {
    properties: ['requestorFullName', 'minutes', 'reason', 'startTime', 'endTime', 'requestorDepartment', 'requestorWO','requestorWOManager', 'requestorForWO', 'requestorForProject', 'createdAt'],
    title: ['requestorFullName'],
    subtitle: ['requestorDepartment', 'requestorForProject']
  }


  approvals$ = this.loadingSrv.showLoaderUntilCompleted(
    this.approvalSrv.getMyApprovals()
  ).pipe(
    switchMap(() => this.approvalSrv.approvals),
    tap(resData => {
      this.approvalsData.data = resData;
    })
  );

  constructor(
    private screenSizeSrv: ScreensizeService,
    private approvalSrv: ApprovalsService,
    private loadingSrv: LoadingService,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    private translate: TranslateService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  openActionSheet(event: {modal: string, data: RequestModel, mobile?: boolean}) {

    if (!this.isDesktop) {
      this.presentAlert(event.data);
    } else {
      this.openModal(event.data);
    }


  }

  async openModal(req: RequestModel) {

    const modal = await this.modalCtrl.create({
      component: ChangeStatusComponent,
      cssClass: 'change-status-modal',
      componentProps: {request: req}
    });

    await modal.present();

    const resData = await modal.onWillDismiss();

    if (resData.role === 'confirm') {

      const newStatus = +resData.data.formValue.status;
      const minutes = resData.data.formValue.status.minutes;

      if (minutes) {
        this.approvalSrv.updateStatus(+req.id, newStatus, minutes).subscribe();
      } else {
        this.approvalSrv.updateStatus(+req.id, newStatus).subscribe();
      }

    }


  }

  async presentAlert(request: RequestModel) {

    const newStatus = await this.presentActionSheet();

    if (newStatus) {

      if (newStatus === 2) {

        const alert = await this.alertCtrl.create({
          header: this.translate.instant('messagess.setDurationHeader'),
          buttons: [this.translate.instant('btn.approve')],
          inputs: [
            {
              value: request.minutes,
            }
          ],
        });

        await alert.present();

        const result = await alert.onDidDismiss();

        if (result.data) {
          const minutes: any = Object.values(result.data.values)[0];

          this.approvalSrv.updateStatus(+request.id, newStatus, minutes).subscribe();
        }


      } else {

        this.approvalSrv.updateStatus(+request.id, newStatus).subscribe();

      }



    }


  }

  async presentActionSheet() {

    const actionSheet = await this.actionSheetCtrl.create({
      header: this.translate.instant('messagess.changeRequestStatusHeader'),
      // subHeader: 'Example subheader',
      buttons: [
        {
          text: this.translate.instant('btn.decline'),
          role: 'destructive',
          data: {
            action: 3,
          },
        },
        {
          text: this.translate.instant('btn.approve'),
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
