import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportsService } from 'src/app/shared/data-store/reports/reports.service';
import { RequestModel } from 'src/app/shared/data-store/request/request.model';
import { LoadingService } from 'src/app/shared/services/loading/loading.service';
import { MessagesService } from 'src/app/shared/services/messages/messages.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.page.html',
  styleUrls: ['./departments.page.scss'],
})
export class DepartmentsPage implements OnInit {

  reports!: RequestModel[];

  form!: FormGroup;

  schema = {
    properties: ['requestorFullName', 'status', 'minutes', 'reason', 'startTime', 'endTime', 'requestorDepartment', 'requestorWO','requestorWOManager', 'requestorForWO', 'requestorForProject', 'requestorForWO', 'requestorForProject'],
    title: ['requestorWO'],
    subtitle: ['requestorFullName']
  }

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
        department: ['', {
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
      this.reportSrv.departments(this.form.value.startDate, this.form.value.endDate, this.form.value.department)).subscribe(resData => {

        this.reports = resData;

    });

  }

}
