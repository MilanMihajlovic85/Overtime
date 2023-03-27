import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { switchMap, tap } from 'rxjs';
import { RequestModel } from '../shared/data-store/request/request.model';
import { RequestService } from '../shared/data-store/request/request.service';
import { LoadingService } from '../shared/services/loading/loading.service';
import { ScreensizeService } from '../shared/services/screen-size/screen-size.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit {

  isDesktop$ = this.screenSizeSrv.isDesktopView();

  requestsData = new MatTableDataSource<RequestModel>([]);


  buttons: {[key: string]: any} = {
    delete: { modal: 'delete', icon: 'delete_outline', color: 'warn', mobileIcon: 'trash', mobileColor: 'danger', tooltip: 'btn.delete' }
  };

  desktopSchema = {
    properties: ['requestorForProject', 'requestorForWO', 'requestorDepartment', 'minutes','requestorWOManager', 'startTime', 'endTime', 'reason', 'createdAt'],
    // extended: ['minutes', 'reason','requestorWOManager'],
    noSearch: true
  };

  schema = {
    properties: ['minutes', 'reason', 'startTime', 'endTime', 'requestorDepartment', 'requestorWO','requestorWOManager', 'requestorForWO', 'requestorForProject', 'createdAt'],
    title: ['requestorForProject'],
    subtitle: ['requestorForWO'],
    period: ['startTime', 'endTime']
  }

  requests$ = this.loadingSrv.showLoaderUntilCompleted(
    this.requestSrv.getMyRequests()
  ).pipe(
    switchMap(() => this.requestSrv.requests),
    tap(resData => {
      this.requestsData.data = resData;
    })
  );


  constructor(
    private screenSizeSrv: ScreensizeService,
    private requestSrv: RequestService,
    private loadingSrv: LoadingService,
    private alertController: AlertController,
    private translate: TranslateService
  ) { }

  ngOnInit() {}

  openModal(event: {modal: string, data: {[key: string]: string}, mobile?: boolean}) {

    this.alertController.create({
      header: this.translate.instant('messagess.deleteWarning'),
      message: this.translate.instant('messagess.deleteRequest', { projectId: event.data.requestorForProject }),
      cssClass: 'delete-alert',
      buttons: [
        {
          text: this.translate.instant('btn.cancel'),
          cssClass: 'alert-button-cancel',
        },
        {
          text: this.translate.instant('btn.delete'),
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
