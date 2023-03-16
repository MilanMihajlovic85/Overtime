import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { DepartmentsPage } from './departments.page';
import { MessagesModule } from 'src/app/shared/ui/messages/messages.module';
import { LoadingModule } from 'src/app/shared/ui/loading/loading.module';
import { RouterModule } from '@angular/router';
import { ListModule } from 'src/app/shared/ui/list/list.module';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TranslateModule } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DepartmentsPage }]),
    FormsModule,
    IonicModule,
    ListModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    TranslateModule,
    MatSelectModule,
    LoadingModule,
    MessagesModule
  ],
  declarations: [DepartmentsPage]
})
export class DepartmentsPageModule {}
