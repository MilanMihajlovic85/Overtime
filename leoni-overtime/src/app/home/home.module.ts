import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { RouterModule } from '@angular/router';
import { MessagesModule } from '../shared/ui/messages/messages.module';
import { LoadingModule } from '../shared/ui/loading/loading.module';
import { TranslateModule } from '@ngx-translate/core';
import { LogoutModule } from '../shared/ui/logout/logout.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomePage }]),
    FormsModule,
    IonicModule,
    LoadingModule,
    MessagesModule,
    TranslateModule,
    LogoutModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
