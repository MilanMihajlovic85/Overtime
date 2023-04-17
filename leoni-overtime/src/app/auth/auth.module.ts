import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPage } from './auth.page';
import { RouterModule } from '@angular/router';
import { MessagesModule } from '../shared/ui/messages/messages.module';
import { LoadingModule } from '../shared/ui/loading/loading.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AuthPage }]),
    FormsModule,
    IonicModule,
    MatInputModule,
    MatIconModule,
    LoadingModule,
    MessagesModule,
    TranslateModule
  ],
  declarations: [AuthPage]
})
export class AuthPageModule {}
