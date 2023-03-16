import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { catchError, throwError } from 'rxjs';
import { MessagesService } from 'src/app/shared/services/messages/messages.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  showForm = true;
  form!: FormGroup;

  data!: {project: string, startDate: Date, endDate: Date};


  schema = {
    properties: ['requestorFullName', 'status', 'minutes', 'reason', 'startTime', 'endTime', 'requestorDepartment', 'requestorWO','requestorWOManager', 'requestorForWO', 'requestorForProject'],
    title: ['requestorForProject'],
    subtitle: ['requestorFullName']
  }

  projects$ = this.http.get<{[key: string]: number | string}[]>(`${environment.apiUrl}/RequestData/DataDriven_DDL_Projects`).pipe(
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
    private messagesSrv: MessagesService
  ) { }

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

  }

  onElementSelected(event: boolean) {
    this.showForm = event;
  }

}
