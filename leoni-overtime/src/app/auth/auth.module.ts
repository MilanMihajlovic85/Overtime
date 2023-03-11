import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { RouterModule } from '@angular/router';
import { MessagesModule } from '../shared/ui/messages/messages.module';
import { LoadingModule } from '../shared/ui/loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AuthPage }]),
    FormsModule,
    IonicModule,
    LoadingModule,
    MessagesModule
  ],
  declarations: [AuthPage]
})
export class AuthPageModule {}
