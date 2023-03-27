import { animate, state, style, transition, trigger } from '@angular/animations';
import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { combineLatest, map, Observable, take } from 'rxjs';
import { I18nService } from '../../services/i18n/i18n.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableComponent  implements OnInit {

  @Input() data: any = new MatTableDataSource<any>([]);
  @Input() schema!: {[key: string]: any};
  @Input() buttons!: any;

  // @Output() elementChanged: EventEmitter<any> = new EventEmitter();
  @Output() modalOpen: EventEmitter<any> = new EventEmitter();

  btnColumns!: string[];
  extendedRowData: {[key: string]: string}[] = [];
  translatedSchema!: {[key: string]: any};

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild('TableSort', { static: false }) sort!: MatSort;

  value = '';

  rowsExpanded = false;

  displayedColumns!: string[];

  columns: any[] = [];

  constructor(
    private changeDetector: ChangeDetectorRef,
    private datePipe: DatePipe,
    private i18n: I18nService
  ) { }

  ngOnInit() {

    const properties = this.schema['properties'];

    let translate$!: Observable<{[key: string]: {[key: string]: string} | string}>;

    if (this.schema.extended) {
      translate$ = combineLatest([
        this.i18n.translateProperties(properties),
        this.i18n.translateProperties(this.schema.extended)
      ]).pipe(
        map(([properties, extended]) => ({properties, extended}))
      );
    } else {
      translate$ = combineLatest([
        this.i18n.translateProperties(properties)
      ]).pipe(
        map(([properties]) => ({properties}))
      );
    }

    translate$.pipe(
      take(1),
    ).subscribe((schema: any) => {

      this.translatedSchema = schema;

      if (schema.extended) {
        for (const key in schema.extended) {
          if (Object.prototype.hasOwnProperty.call(schema.extended, key)) {
            this.extendedRowData.push({key, val: schema.extended[key]});
          }
        }
      }

      for (const header in schema.properties) {

        if (Object.prototype.hasOwnProperty.call(schema.properties, header)) {
          const property = schema.properties[header];
          this.columns.push({
            columnDef: property,
            header: header,
            cell: (el: any) => {

              if (property === 'responseDate' || property === 'createdAt') {
                return this.datePipe.transform(el[property], 'dd/MM/yyyy');
              }

              if (property === 'startTime' || property === 'endTime') {
                return this.datePipe.transform(el[property], 'dd/MM/yyyy HH:mm');
              }

              return el[property];

            }
          });

        }

      }

      this.btnColumns = Object.keys(this.buttons).filter(e => e !== 'create');

      this.displayedColumns = this.columns.map(c => c.columnDef).concat(this.btnColumns);

    });

  }

  ngAfterViewInit() {
    this.data.paginator = this.paginator;
    this.data.sort = this.sort;
    this.changeDetector.detectChanges();
  }

  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();

  }

  clearSearchInput() {
    this.value = '';
    this.data.filter = '';
  }

  openModal(modal: string, data: any) {

    this.modalOpen.emit({modal, data});

  }

  toggleRow(element: { expanded: boolean; }) {

    // Uncommnet to open only single row at once
    this.data.data.forEach((row: any) => {
      row.expanded = false;
    })
    element.expanded = !element.expanded
  }

  manageAllRows() {

    this.rowsExpanded = !this.rowsExpanded;

    this.data.data.forEach((row: any) => {
      row.expanded = this.rowsExpanded;
    })
  }

}
