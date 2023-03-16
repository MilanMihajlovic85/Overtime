import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ReportsService } from 'src/app/shared/data-store/reports/reports.service';
import { RequestModel } from 'src/app/shared/data-store/request/request.model';
import { LoadingService } from 'src/app/shared/services/loading/loading.service';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.page.html',
  styleUrls: ['./my-requests.page.scss'],
})
export class MyRequestsPage implements OnInit {

  showForm = true;
  form!: FormGroup;

  data!: {startDate: Date, endDate: Date};

  schema = {
    properties: ['requestorFullName', 'status', 'minutes', 'reason', 'startTime', 'endTime', 'requestorDepartment', 'requestorWO','requestorWOManager', 'requestorForWO', 'requestorForProject'],
    title: ['requestorForProject'],
    subtitle: ['requestorDepartment']
  }

  constructor(
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private datePipe: DatePipe,
  ) { }

  ngOnInit() {

    this.form = this.formBuilder.group(
      {
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

    this.data = this.form.value;

  }

  onElementSelected(event: boolean) {
    this.showForm = event;
  }

}
