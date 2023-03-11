import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { ApprovalsPage } from './approvals.page';
import { RouterModule } from '@angular/router';
import { ListModule } from '../shared/ui/list/list.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ApprovalsPage }]),
    FormsModule,
    IonicModule,
    ListModule
  ],
  declarations: [ApprovalsPage]
})
export class ApprovalsPageModule {}
