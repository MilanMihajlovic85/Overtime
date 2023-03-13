import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { RequestService } from '../shared/data-store/request/request.service';
import { LoadingService } from '../shared/services/loading/loading.service';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.page.html',
  styleUrls: ['./new-request.page.scss'],
})
export class NewRequestPage implements OnInit {

  form!: FormGroup;

  projects$ = this.requestSrv.getWOProjects();

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


  onFormSubmit() {

    if (!this.form.valid) return;

    this.loadingSrv.showLoaderUntilCompleted(
      this.requestSrv.createRequest(this.form.value)
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
