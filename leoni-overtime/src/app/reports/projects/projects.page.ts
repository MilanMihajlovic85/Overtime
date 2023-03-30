import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScreensizeService } from 'src/app/shared/services/screen-size/screen-size.service';
import { DropdownsDataService } from 'src/app/shared/data-store/dropdowns-data/dropdowns-data.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  isDesktop$ = this.screenSizeSrv.isDesktopView();

  showForm = true;
  form!: FormGroup;

  data!: {project: string, startDate: Date, endDate: Date};

  desktopSchema = {
    properties: ['status', 'requestorDepartment', 'requestorForWO', 'requestorWO','requestorWOManager', 'minutes', 'startTime', 'endTime', 'reason'],
  };

  schema = {
    properties: ['requestorFullName', 'status', 'minutes', 'reason', 'startTime', 'endTime', 'requestorDepartment', 'requestorWO','requestorWOManager', 'requestorForWO', 'requestorForProject'],
    title: ['requestorForWO'],
    subtitle: ['requestorDepartment']
  }

  projects$ = this.dropdownsDataSrv.getData('Projects');

  constructor(
    private screenSizeSrv: ScreensizeService,
    private changeDetector: ChangeDetectorRef,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownsDataSrv: DropdownsDataService
  ) {}

  ngOnInit() {

    this.form = this.formBuilder.group(
      {
        project: ['', {
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

    this.data = this.form.value;

    this.changeDetector.detectChanges();

  }

  onElementSelected(event: boolean) {
    this.showForm = event;
  }

}
