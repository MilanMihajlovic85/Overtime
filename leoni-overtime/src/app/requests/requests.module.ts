import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { RequestsPage } from './requests.page';
import { RouterModule } from '@angular/router';

import { ListModule } from '../shared/ui/list/list.module';
import { PaginatedListModule } from '../shared/ui/paginated-list/paginated-list.module';
import { MessagesModule } from '../shared/ui/messages/messages.module';
import { LoadingModule } from '../shared/ui/loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: RequestsPage }]),
    FormsModule,
    IonicModule,
    ListModule,
    PaginatedListModule,
    LoadingModule,
    MessagesModule
  ],
  declarations: [RequestsPage]
})
export class RequestsPageModule {}
