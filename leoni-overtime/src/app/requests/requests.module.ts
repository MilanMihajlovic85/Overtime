import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { RequestsPage } from './requests.page';
import { RouterModule } from '@angular/router';

import { ListModule } from '../shared/ui/list/list.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: RequestsPage }]),
    FormsModule,
    IonicModule,
    ListModule
  ],
  declarations: [RequestsPage]
})
export class RequestsPageModule {}
