import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { MessagesService } from 'src/app/shared/services/messages/messages.service';
import { ScreensizeService } from 'src/app/shared/services/screen-size/screen-size.service';
import { environment } from 'src/environments/environment';

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

  constructor(
    private screenSizeSrv: ScreensizeService,
    private changeDetector: ChangeDetectorRef,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private messagesSrv: MessagesService
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
