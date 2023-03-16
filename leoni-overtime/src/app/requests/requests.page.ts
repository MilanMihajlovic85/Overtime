import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { switchMap, tap } from 'rxjs';
import { RequestModel } from '../shared/data-store/request/request.model';
import { RequestService } from '../shared/data-store/request/request.service';
import { LoadingService } from '../shared/services/loading/loading.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit {

  requests!: RequestModel[];

  buttons: {[key: string]: any} = {
    delete: { modal: 'delete', icon: 'delete_outline', color: 'warn', mobileIcon: 'trash', mobileColor: 'danger', tooltip: 'btn.delete' }
  };

  schema = {
    properties: ['status', 'minutes', 'reason', 'startTime', 'endTime', 'requestorDepartment', 'requestorWO','requestorWOManager', 'requestorForWO', 'requestorForProject', 'responseDate', 'createdAt'],
    title: ['requestorForProject'],
    subtitle: ['requestorForWO']
  }

  requests$ = this.loadingSrv.showLoaderUntilCompleted(
    this.requestSrv.getMyRequests()
  ).pipe(
    switchMap(() => this.requestSrv.requests),
    tap(resData => {
      this.requests = resData;
    })
  );


  constructor(
    private requestSrv: RequestService,
    private loadingSrv: LoadingService,
    private alertController: AlertController
  ) { }

  ngOnInit() {}

  openModal(event: {modal: string, data: {[key: string]: string}, mobile?: boolean}) {


    const msg = `Request for project ${event.data.requestorForProject} will be deleted. The deletion is permanent and this action cannot be revoked.`

    this.alertController.create({
      header: 'Warning',
      message: msg,
      cssClass: 'delete-alert',
      buttons: [
        {
          text: 'Cancel',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Delete',
          cssClass: 'delete-alert-button-confirm',
          handler: () => {
            this.requestSrv.deleteRequest(+event.data.id).subscribe();
          }
        },
      ],
    }).then(alert => {
      alert.present();
    });

  }

}
