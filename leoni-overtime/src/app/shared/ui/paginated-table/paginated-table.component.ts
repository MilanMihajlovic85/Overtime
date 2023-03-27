import { animate, state, style, transition, trigger } from '@angular/animations';
import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { combineLatest, map, Observable, startWith, switchMap, take } from 'rxjs';
import { ReportsService } from '../../data-store/reports/reports.service';
import { I18nService } from '../../services/i18n/i18n.service';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'app-paginated-table',
  templateUrl: './paginated-table.component.html',
  styleUrls: ['./paginated-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PaginatedTableComponent  implements OnInit {

  @Input() searchData!: {[key: string]: string | Date};
  @Input() schema!: {[key: string]: any};
  @Input() category!: string;
  @Input() buttons!: any;

  @Output() modalOpen: EventEmitter<any> = new EventEmitter();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  btnColumns!: string[];
  extendedRowData: {[key: string]: string}[] = [];
  translatedSchema!: {[key: string]: any};
  displayedColumns!: string[];
  columns: any[] = [];
  rowsExpanded = false;

  dataSource!: MatTableDataSource<any>;
  url!: string;
  itemListData = [];
  page_number = 0;
  page_limit = 10;
  resultsLength = 0;


  constructor(
    private datePipe: DatePipe,
    private i18n: I18nService,
    private reportSrv: ReportsService,
    private loadingSrv: LoadingService
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

    this.paginator.page.pipe(
      startWith({}),
      switchMap(() => {
        this.url = this.getUrl();
        return this.loadingSrv.showLoaderUntilCompleted(this.reportSrv.getReports(this.url));
      }),
      map(resData => {
        if (resData === null) return [];
        this.resultsLength = 150;
        return resData;
      })
    ).subscribe(resData => {
      this.dataSource = new MatTableDataSource(resData);
    });

  }

  toggleRow(element: { expanded: boolean; }) {

    // Uncommnet to open only single row at once
    this.dataSource.data.forEach((row: any) => {
      row.expanded = false;
    })
    element.expanded = !element.expanded
  }

  manageAllRows() {

    this.rowsExpanded = !this.rowsExpanded;

    this.dataSource.data.forEach((row: any) => {
      row.expanded = this.rowsExpanded;
    })
  }

  openModal(modal: string, data: any) {

    this.modalOpen.emit({modal, data});

  }

  private getUrl() {

    const startDate = this.datePipe.transform(this.searchData.startDate, 'yyyy-MM-dd');
    const endDate = this.datePipe.transform(this.searchData.endDate, 'yyyy-MM-dd');

    let url!: string;

    switch (this.category) {
      case 'myRequests':
        url = '/Reports/MyRequestsFromHistory';
        break;
      case 'departments':
        url = `/Reports/DepartmentFromHistory/${this.searchData.department}`;
        break;
      case 'organizations':
        url = `/Reports/WOFromHistory/${this.searchData.organization}`
        break;
      case 'projects':
        url = `/Reports/ProjectFromHistory/${this.searchData.project}`
        break;
      default:
        break;
    }

    url = `${url}/${startDate}/${endDate}/${this.paginator.pageIndex + 1}/${this.paginator.pageSize}`;

    // url = '?_page=' + (this.paginator.pageIndex + 1) + '&_limit=' + this.paginator.pageSize;

    return url;

  }

}
