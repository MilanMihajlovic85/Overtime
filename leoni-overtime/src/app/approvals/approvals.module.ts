import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { ApprovalsPage } from './approvals.page';
import { RouterModule } from '@angular/router';
import { ListModule } from '../shared/ui/list/list.module';
import { MessagesModule } from '../shared/ui/messages/messages.module';
import { LoadingModule } from '../shared/ui/loading/loading.module';
import { TranslateModule } from '@ngx-translate/core';
import {MatRadioModule} from '@angular/material/radio';
import { LogoutModule } from '../shared/ui/logout/logout.module';
import { TableModule } from '../shared/ui/table/table.module';
import { ChangeStatusComponent } from './change-status/change-status.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ApprovalsPage }]),
    FormsModule,
    IonicModule,
    ListModule,
    TableModule,
    LoadingModule,
    MessagesModule,
    TranslateModule,
    LogoutModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatInputModule
  ],
  declarations: [ApprovalsPage, ChangeStatusComponent]
})
export class ApprovalsPageModule {}
