import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, tap, throwError } from 'rxjs';

import { StatisticsModel } from 'src/app/shared/data-store/statistics/statistics.model';
import { StatisticsService } from 'src/app/shared/data-store/statistics/statistics.service';
import { LoadingService } from 'src/app/shared/services/loading/loading.service';
import { MessagesService } from 'src/app/shared/services/messages/messages.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.page.html',
  styleUrls: ['./departments.page.scss'],
})
export class DepartmentsPage implements OnInit {

  statistics!: StatisticsModel[];

  showForm = true;
  form!: FormGroup;

  departments$ = this.http.get<{[key: string]: number | string}[]>(`${environment.apiUrl}/RequestData/DataDriven_DDL_Departments`).pipe(
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

  schema = {
    properties: ['department', 'hours', 'requestsNum', 'status', 'organization'],
    title: ['department'],
    subtitle: ['organization']
  }

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private messagesSrv: MessagesService,
    private statisticSrv: StatisticsService,
    private loadingSrv: LoadingService,
    private datePipe: DatePipe
  ) {}

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

    const startDate = this.datePipe.transform(this.form.value.startDate, 'yyyy-MM-dd');
    const endDate = this.datePipe.transform(this.form.value.endDate, 'yyyy-MM-dd');

    this.loadingSrv.showLoaderUntilCompleted(
      this.statisticSrv.getStatistics(`/Statistics/GetCumulativeStatisticsForDepartment/${this.form.value.department}/${startDate}/${endDate}`)
    ).subscribe(resData => {
      this.statistics = resData;
    });


  }

  onElementSelected(event: boolean) {
    this.showForm = event;
  }

}
