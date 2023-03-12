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
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {}

  openActions(event: {modal: string, data: {[key: string]: string}, mobile?: boolean}) {

    this.presentAlert(event.data);

  }

  async presentAlert(request: { [key: string]: string }) {
    const alert = await this.alertCtrl.create({
      header: 'Change Request Status',
      buttons: ['Save'],
      inputs: [
        {
          label: 'Approved',
          type: 'radio',
          value: 2,
        },
        {
          label: 'Declined',
          type: 'radio',
          value: 3,
        },
      ],
    });

    await alert.present();

    const result = await alert.onDidDismiss();

    let status!: number;
    switch (request.status) {
      case 'Approved':
        status = 2;
        break;
      default:
        status = 3;
        break;
    }

    if (result.data && result.data.values) {
      // console.log(result.data.values ?? null);
      this.approvalSrv.updateStatus(request, status, result.data.values).subscribe();
    }

  }


}
