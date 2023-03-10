import { Component, OnInit } from '@angular/core';
import { switchMap, tap } from 'rxjs';
import { ApprovalsService } from '../shared/data-store/approvals/approvals.service';
import { LoadingService } from '../shared/services/loading/loading.service';

@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.page.html',
  styleUrls: ['./approvals.page.scss'],
})
export class ApprovalsPage implements OnInit {

  approvals$ = this.loadingSrv.showLoaderUntilCompleted(
    this.approvalSrv.getMyApprovals()
  ).pipe(
    switchMap(() => this.approvalSrv.approvals),
    tap(resData => {

      console.log(resData);

    })
  );

  constructor(
    private approvalSrv: ApprovalsService,
    private loadingSrv: LoadingService
  ) { }
  ngOnInit() {

    console.log('OnInit');


    this.approvals$.subscribe();

  }

}
