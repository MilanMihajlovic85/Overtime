import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    properties: ['status', 'minutes', 'reason', 'startTime', 'endTime', 'requestorDepartment', 'requestorWO','requestorWOManager', 'requestorForWO', 'requestorForProject'],
    title: ['requestorForProject'],
    subtitle: ['requestorForWO']
  }

  constructor(
    private formBuilder: FormBuilder
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

  }

  onElementSelected(event: boolean) {
    this.showForm = event;
  }

}
