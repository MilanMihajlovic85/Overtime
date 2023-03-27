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
import { TranslateModule } from '@ngx-translate/core';
import { LogoutModule } from '../shared/ui/logout/logout.module';
import { TableModule } from '../shared/ui/table/table.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: RequestsPage }]),
    FormsModule,
    IonicModule,
    ListModule,
    TableModule,
    PaginatedListModule,
    LoadingModule,
    MessagesModule,
    TranslateModule,
    LogoutModule
  ],
  declarations: [RequestsPage]
})
export class RequestsPageModule {}
