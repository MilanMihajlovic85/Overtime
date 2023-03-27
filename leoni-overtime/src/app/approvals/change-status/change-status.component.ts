import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { ModalController } from '@ionic/angular';
import { RequestModel } from 'src/app/shared/data-store/request/request.model';
import { ScreensizeService } from 'src/app/shared/services/screen-size/screen-size.service';

@Component({
  selector: 'app-change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.scss'],
})
export class ChangeStatusComponent  implements OnInit {

  @Input() request!: RequestModel;

  minDisabled = true;
  isDesktop$ = this.screenSizeSrv.isDesktopView();
  form!: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private screenSizeSrv: ScreensizeService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    console.log(this.request);


    this.form = this.formBuilder.group(
      {
        status: ['', {
          validators: [
            Validators.compose([Validators.required])
          ]
        }],
        // approve: ['', {
        //   validators: [
        //     Validators.compose([Validators.required])
        //   ]
        // }],
        minutes: [this.request.minutes, {
          // validators: [
          //   Validators.compose([Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]),
          // ]
        }]
      }
    );

    this.form.get('minutes')?.disable();

  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onFormSubmit() {

    if (!this.form.valid) return;

    this.modalCtrl.dismiss({formValue: this.form.value}, 'confirm');
  }

  onKeyPress(event: any) {

    const regexpNumber = /[0-9\+\-\ ]/;

    let inputCharacter = String.fromCharCode(event.charCode);

    if (event.keyCode != 8 && !regexpNumber.test(inputCharacter)) {
      event.preventDefault();
    }

  }

  onStatusChange(event: MatRadioChange) {

    if (event.value === '3') {
      this.form.get('minutes')?.clearValidators();
      this.form.get('minutes')?.updateValueAndValidity();
      this.form.get('minutes')?.disable();
    } else if (event.value === '2') {
      this.form.get('minutes')?.addValidators([Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]);
      this.form.get('minutes')?.updateValueAndValidity();
      this.form.get('minutes')?.enable();
    }

  }

}
