import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { DropdownsDataService } from 'src/app/shared/data-store/dropdowns-data/dropdowns-data.service';

import { StatisticsModel } from 'src/app/shared/data-store/statistics/statistics.model';
import { StatisticsService } from 'src/app/shared/data-store/statistics/statistics.service';
import { LoadingService } from 'src/app/shared/services/loading/loading.service';
import { ScreensizeService } from 'src/app/shared/services/screen-size/screen-size.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.page.html',
  styleUrls: ['./departments.page.scss'],
})
export class DepartmentsPage implements OnInit {

  isDesktop$ = this.screenSizeSrv.isDesktopView();

  firstLoad = true;

  statisticsData = new MatTableDataSource<StatisticsModel>;

  showForm = true;
  form!: FormGroup;

  departments$ = this.dropdownsDataSrv.getData('Departments');

  schema = {
    properties: ['organization', 'hours', 'requestsNum', 'status'],
    noSearch: true,
    title: ['department'],
    subtitle: ['organization']
  }

  constructor(
    private screenSizeSrv: ScreensizeService,
    private formBuilder: FormBuilder,
    private statisticSrv: StatisticsService,
    private loadingSrv: LoadingService,
    private datePipe: DatePipe,
    private dropdownsDataSrv: DropdownsDataService
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
      this.statisticsData.data = resData;
      this.firstLoad = false;
    });


  }

  onElementSelected(event: boolean) {
    this.showForm = event;
  }

}
