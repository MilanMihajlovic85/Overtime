import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { ApprovalsPage } from './approvals.page';
import { RouterModule } from '@angular/router';
import { ListModule } from '../shared/ui/list/list.module';
import { MessagesModule } from '../shared/ui/messages/messages.module';
import { LoadingModule } from '../shared/ui/loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ApprovalsPage }]),
    FormsModule,
    IonicModule,
    ListModule,
    LoadingModule,
    MessagesModule
  ],
  declarations: [ApprovalsPage]
})
export class ApprovalsPageModule {}
