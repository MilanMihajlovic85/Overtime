import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { ApprovalsPage } from './approvals.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ApprovalsPage }]),
    FormsModule,
    IonicModule
  ],
  declarations: [ApprovalsPage]
})
export class ApprovalsPageModule {}