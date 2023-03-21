import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonDatetime, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { format, parseISO } from 'date-fns';
import { RequestService } from '../shared/data-store/request/request.service';
import { LoadingService } from '../shared/services/loading/loading.service';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.page.html',
  styleUrls: ['./new-request.page.scss'],
})
export class NewRequestPage implements OnInit {

  @ViewChild('startDatetime') startDatetime!: IonDatetime;
  @ViewChild('endDatetime') endDatetime!: IonDatetime;

  form!: FormGroup;

  projects$ = this.requestSrv.getWOProjects();

  locale = this.translate.currentLang === 'en' ? 'en-GB' : 'sr-Latn';


  showStartTimePicker = false;
  showEndTimePicker = false;

  formatedStartTimeString = '';
  formatedEndTimeString = '';

  startDatetimeValue!: Date;
  endDatetimeValue!: Date;


  constructor(
    private requestSrv: RequestService,
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private loadingSrv: LoadingService,
    private toastCtrl: ToastController
  ) {}

  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {
        reason: ['', {
          validators: [
            Validators.compose([Validators.required])
          ]
        }],
        projectId: ['', {
          validators: [
            Validators.compose([Validators.required]),
          ]
        }],
        start: ['', {
          validators: [
            Validators.compose([Validators.required])
          ]
        }],
        end: ['', {
          validators: [
            Validators.compose([Validators.required])
          ]
        }]
      }
    );
  }


  startDateChanged(value: any) {

    this.formatedStartTimeString = format(parseISO(value), 'dd/MM/yyyy HH:mm');

    this.form.patchValue({start: this.formatedStartTimeString});

    this.startDatetimeValue = new Date(value);

    this.showStartTimePicker = false;


  }

  endDateChanged(value: any) {

    this.formatedEndTimeString = format(parseISO(value), 'dd/MM/yyyy HH:mm');

    this.form.patchValue({end: this.formatedEndTimeString});

    this.endDatetimeValue = new Date(value);

    this.showEndTimePicker = false;

  }

  closeStartTime() {
    this.startDatetime.cancel(true);
  }

  selectStartTime() {
    this.startDatetime.confirm(true);
  }

  closeEndTime() {
    this.endDatetime.cancel(true);
  }

  selectEndTime() {
    this.endDatetime.confirm(true);
  }


  onFormSubmit() {

    if (!this.form.valid) return;

    this.loadingSrv.showLoaderUntilCompleted(
      this.requestSrv.createRequest(
        this.form.value.projectId,
        this.form.value.reason,
        this.startDatetimeValue,
        this.endDatetimeValue
      )
    ).subscribe(() => {

      this.form.reset();

      Object.keys(this.form.controls).forEach(key => {
        this.form.get(key)!.setErrors(null);
      });

      this.toastCtrl.create({
        message: 'Request successfuly created',
        duration: 1500,
        position: 'top',
        icon: 'checkmark',
        cssClass: 'success-toast'
      }).then(toast => toast.present());

    });

  }

}
