import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { PageNotFoundPage } from './page-not-found.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PageNotFoundPage }]),
    TranslateModule,
    IonicModule
  ],
  declarations: [PageNotFoundPage]
})
export class PageNotFoundPageModule {}
