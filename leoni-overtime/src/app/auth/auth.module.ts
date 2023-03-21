import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPage } from './auth.page';
import { RouterModule } from '@angular/router';
import { MessagesModule } from '../shared/ui/messages/messages.module';
import { LoadingModule } from '../shared/ui/loading/loading.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AuthPage }]),
    FormsModule,
    IonicModule,
    LoadingModule,
    MessagesModule,
    TranslateModule
  ],
  declarations: [AuthPage]
})
export class AuthPageModule {}
