import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrganizationsPage } from './organizations.page';
import { RouterModule } from '@angular/router';
import { ListModule } from 'src/app/shared/ui/list/list.module';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TranslateModule } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { MessagesModule } from 'src/app/shared/ui/messages/messages.module';
import { LoadingModule } from 'src/app/shared/ui/loading/loading.module';
import { PaginatedListModule } from 'src/app/shared/ui/paginated-list/paginated-list.module';
import { PaginatedTableModule } from 'src/app/shared/ui/paginated-table/paginated-table.module';
import { LogoutModule } from 'src/app/shared/ui/logout/logout.module';
import { AccountModule } from 'src/app/shared/ui/account/account.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: OrganizationsPage }]),
    FormsModule,
    IonicModule,
    ListModule,
    PaginatedListModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    TranslateModule,
    MatSelectModule,
    LoadingModule,
    MessagesModule,
    PaginatedTableModule,
    LogoutModule,
    AccountModule
  ],
  declarations: [OrganizationsPage]
})
export class OrganizationsPageModule {}
