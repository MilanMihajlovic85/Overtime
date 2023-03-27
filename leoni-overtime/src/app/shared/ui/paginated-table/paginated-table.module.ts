import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { LoadingModule } from '../loading/loading.module';
import { PaginatedTableComponent } from './paginated-table.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';




@NgModule({
  declarations: [
    PaginatedTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatTooltipModule,
    IonicModule,
    LoadingModule,
    TranslateModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    PaginatedTableComponent
  ]
})
export class PaginatedTableModule { }
