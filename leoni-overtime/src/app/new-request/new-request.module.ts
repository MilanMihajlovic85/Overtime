import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewRequestPage } from './new-request.page';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NGX_MAT_DATE_FORMATS } from '@angular-material-components/datetime-picker';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import { LoadingModule } from '../shared/ui/loading/loading.module';
import { MessagesModule } from '../shared/ui/messages/messages.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: NewRequestPage }]),
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatMomentModule,
    LoadingModule,
    MessagesModule,
  ],
  declarations: [NewRequestPage],
  providers: [
    {
      provide: NGX_MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: "DD/MM/yyyy HH:mm"
        },
        display: {
          dateInput: "DD/MM/yyyy HH:mm",
          monthYearLabel: "MMM yyyy",
          dateA11yLabel: "LL",
          monthYearA11yLabel: "MMMM YYYY"
        }
      }
    }
  ]
})
export class NewRequestPageModule {}
