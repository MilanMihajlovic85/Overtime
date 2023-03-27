import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScreensizeService } from 'src/app/shared/services/screen-size/screen-size.service';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.page.html',
  styleUrls: ['./my-requests.page.scss'],
})
export class MyRequestsPage implements OnInit {

  isDesktop$ = this.screenSizeSrv.isDesktopView();

  showForm = true;
  form!: FormGroup;

  data!: {startDate: Date, endDate: Date};

  desktopSchema = {
    properties: ['status', 'requestorDepartment', 'requestorForWO', 'requestorForProject', 'requestorWO','requestorWOManager', 'minutes', 'startTime', 'endTime', 'reason'],
  };

  schema = {
    properties: ['status', 'minutes', 'reason', 'startTime', 'endTime', 'requestorDepartment', 'requestorWO','requestorWOManager', 'requestorForWO', 'requestorForProject'],
    title: ['requestorForProject'],
    subtitle: ['requestorForWO']
  }

  constructor(
    private formBuilder: FormBuilder,
    private screenSizeSrv: ScreensizeService,
    private changeDetector: ChangeDetectorRef
  ) {}

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

    this.changeDetector.detectChanges();


  }

  onElementSelected(event: boolean) {
    this.showForm = event;
  }

}
