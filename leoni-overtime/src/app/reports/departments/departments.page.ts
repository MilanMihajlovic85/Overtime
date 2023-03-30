import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropdownsDataService } from 'src/app/shared/data-store/dropdowns-data/dropdowns-data.service';
import { ScreensizeService } from 'src/app/shared/services/screen-size/screen-size.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.page.html',
  styleUrls: ['./departments.page.scss'],
})
export class DepartmentsPage implements OnInit {

  isDesktop$ = this.screenSizeSrv.isDesktopView();

  showForm = true;
  form!: FormGroup;

  data!: {department: string, startDate: Date, endDate: Date};

  desktopSchema = {
    properties: ['status', 'requestorForWO', 'requestorForProject', 'requestorWO','requestorWOManager', 'minutes', 'startTime', 'endTime', 'reason'],
  };

  schema = {
    properties: ['requestorFullName', 'status', 'minutes', 'reason', 'startTime', 'endTime', 'requestorDepartment', 'requestorWO','requestorWOManager', 'requestorForWO', 'requestorForProject', 'requestorForWO', 'requestorForProject'],
    title: ['requestorForProject'],
    subtitle: ['requestorForWO']
  }

  departments$ = this.dropdownsDataSrv.getData('Departments');

  constructor(
    private screenSizeSrv: ScreensizeService,
    private changeDetector: ChangeDetectorRef,
    private formBuilder: FormBuilder,
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

    this.data = this.form.value;

    this.changeDetector.detectChanges();

  }

  onElementSelected(event: boolean) {
    this.showForm = event;
  }

}
