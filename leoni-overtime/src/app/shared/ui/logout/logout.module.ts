import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LogoutComponent } from './logout.component';

@NgModule({
  declarations: [
    LogoutComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LogoutComponent
  ]
})
export class LogoutModule { }
