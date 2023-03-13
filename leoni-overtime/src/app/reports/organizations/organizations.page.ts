import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, catchError, combineLatest, map, Subscription, tap, throwError } from 'rxjs';
import { ReportsService } from 'src/app/shared/data-store/reports/reports.service';

import { RequestModel } from 'src/app/shared/data-store/request/request.model';
import { LoadingService } from 'src/app/shared/services/loading/loading.service';
import { MessagesService } from 'src/app/shared/services/messages/messages.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.page.html',
  styleUrls: ['./organizations.page.scss'],
})
export class OrganizationsPage implements OnInit {

  reports!: RequestModel[];

  form!: FormGroup;

  schema = {
    properties: ['requestorFullName', 'status', 'minutes', 'reason', 'startTime', 'endTime', 'requestorDepartment', 'requestorWO','requestorWOManager', 'requestorForWO', 'requestorForProject', 'requestorForWO', 'requestorForProject'],
    title: ['requestorWO'],
    subtitle: ['requestorFullName']
  }

  organizations$ = this.http.get<{[key: string]: number | string}[]>(`${environment.apiUrl}/RequestData/GetAllWorkOrganizations`).pipe(
    catchError(err => {
      if (err.error.Message) {
        this.messagesSrv.showErrors(err.error.Message);
      } else if (err.status && err.statusText) {
        const message = err.status + ' ' + err.statusText;
        this.messagesSrv.showErrors(message);
      } else {
        this.messagesSrv.showErrors(err.message);
      }
      return throwError(() => err);
    })
  );

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private messagesSrv: MessagesService,
    private loadingSrv: LoadingService,
    private reportSrv: ReportsService
  ) { }


  ngOnInit() {

    this.form = this.formBuilder.group(
      {
        organization: ['', {
          validators: [
            Validators.compose([Validators.required])
          ]
        }],
        startDate: ['', {
          validators: [
            Validators.compose([Validators.required])
          ]
        }],
        endDate: ['', {
          validators: [
            Validators.compose([Validators.required])
          ]
        }]
      }
    );

  }

  onFormSubmit() {

    if (!this.form.valid) return;

    this.loadingSrv.showLoaderUntilCompleted(
      this.reportSrv.organizations(this.form.value.startDate, this.form.value.endDate, this.form.value.organization)).subscribe(resData => {

        this.reports = resData;

    });

  }

}
