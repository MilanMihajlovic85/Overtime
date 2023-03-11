import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
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
    updateStatus: { modal: 'updateStatus', icon: 'manage_accounts', color: 'primary', mobileIcon: 'create', mobileColor: 'secondary', tooltip: 'tooltip.updateStatus' }
  };

  schema = {
    properties: ['status', 'minutes', 'reason', 'startTime', 'endTime', 'requestorDepartment', 'requestorWO','requestorWOManager', 'requestorForWO', 'requestorForProject', 'responseDate', 'createdAt'],
    title: ['requestorDepartment'],
    subtitle: ['status']
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
    private actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {

    this.approvals$.subscribe();

  }

  openActions(event: {modal: string, data: {[key: string]: string}, mobile?: boolean}) {

    this.presentActionSheet();

  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Change Request Status',
      buttons: [
        {
          text: 'Status1',
          data: {
            action: 'Status1',
          },
        },
        {
          text: 'Status2',
          data: {
            action: 'Status2',
          },
        },
        {
          text: 'Status3',
          data: {
            action: 'Status3',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();

    if (result.data) {
      console.log(result.data.action ?? null);
    }


    // this.result = JSON.stringify(result, null, 2);
  }

}
