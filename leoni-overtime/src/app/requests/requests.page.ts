import { Component, OnInit } from '@angular/core';
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
    create: 'btn.createRequest'
  };

  schema = {
    properties: ['status', 'minutes', 'reason', 'startTime', 'endTime', 'requestorDepartment', 'requestorWO','requestorWOManager', 'requestorForWO', 'requestorForProject', 'responseDate', 'createdAt'],
    title: ['requestorDepartment'],
    subtitle: ['status']
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
    private loadingSrv: LoadingService
  ) { }

  ngOnInit() {}

  openModal(event: {modal: string, data: {[key: string]: string}, mobile?: boolean}) {

    console.log(event);


    // let component: ComponentType<any>;

    // switch (event.modal) {
    //   case 'delete':
    //     if (event.data) this.deleteEmployee(event.data);
    //     break;
    //   default:
    //     if (event.mobile) {
    //       this.matDialogSrv.openModal(EmployeeFormComponent, event.data, event.mobile);
    //     } else {
    //       this.matDialogSrv.openModal(EmployeeFormComponent, event.data, undefined, '55rem');
    //     }
    //     break;
    // }

  }

}
