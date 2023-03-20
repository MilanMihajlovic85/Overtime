import { DatePipe } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { ReportsService } from '../../data-store/reports/reports.service';
import { RequestModel } from '../../data-store/request/request.model';
import { I18nService } from '../../services/i18n/i18n.service';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'app-paginated-list',
  templateUrl: './paginated-list.component.html',
  styleUrls: ['./paginated-list.component.scss'],
  providers: [LoadingService]
})
export class PaginatedListComponent  implements OnInit {

  @Input() searchData!: {[key: string]: string | Date};
  @Input() schema!: {[key: string]: any};
  @Input() buttons: any;
  @Input() category!: string;

  @Output() modalOpen: EventEmitter<any> = new EventEmitter();
  @Output() elementSelected: EventEmitter<boolean> = new EventEmitter();

  showTimeInterval = false;
  showStatusIcon = false;
  statusIcon!: string;

  isCreateBtn = false;
  btns!: {[key: string]: any}[];
  translatedSchema!: {[key: string]: any};
  activeElement!: {[key: string]: any} | undefined | null;
  selectedElement!: {[key: string]: any};
  elements!: {[key: string]: any}[];

  url!: string;
  itemListData = [];
  page_number = 1;
  page_limit = 15;

  dataSource: {[key: string]: string | number}[] = [];
  value = '';

  constructor(
    private datePipe: DatePipe,
    private i18n: I18nService,
    private reportSrv: ReportsService,
    private loadingSrv: LoadingService
  ) { }

  ngOnInit() {

    this.getElements(false, "");

    if ('create' in this.buttons) {
      this.isCreateBtn = true;
      delete this.buttons.create;
    }

    this.btns = Object.values(this.buttons);

    this.showStatusIcon =
      this.schema['properties'].includes('status') &&
      (this.schema['title'][0] === 'requestorForProject' || this.schema['title'][0] === 'requestorForWO');
    this.showTimeInterval = this.schema['properties'].includes('startTime') && this.schema['properties'].includes('endTime');

    let translate$!: Observable<{[key: string]: {[key: string]: string}}>;

    if (this.schema.extended) {
      translate$ = combineLatest([
        this.i18n.translateProperties(this.schema.properties),
        this.i18n.translateProperties(this.schema.extended)
      ]).pipe(
        map(([properties, extended]) => ({properties, extended}))
      );
    } else {
      translate$ = combineLatest([
        this.i18n.translateProperties(this.schema.properties)
      ]).pipe(
        map(([properties]) => ({properties}))
      );
    }

    translate$.subscribe((schema: any) => {
      this.translatedSchema = schema;
    });


  }

  getElements(isFirstLoad: boolean, event: any) {

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

    url = `${url}/${startDate}/${endDate}/${this.page_limit}/${this.page_number}`;

    // url = '?_page=' + this.page_number + '&_limit=' + this.page_limit;

    let reports$: Observable<RequestModel[]>;

    if (!this.elements) {
      reports$ = this.loadingSrv.showLoaderUntilCompleted(this.reportSrv.getReports(url));
    } else {
      reports$ = this.reportSrv.getReports(url);
    };


    reports$.subscribe((resData: any) => {

      if (!this.elements) this.elements = []

      for (let i = 0; i < resData.length; i++) {
        this.elements.push(resData[i]);
      }

      if (isFirstLoad)
        event.target!.complete();

      this.page_number++;

    })

  }


  doInfinite(event: Event) {

    this.getElements(true, event);


  }

  onSelectElement(element: {[key: string]: any}, details?: boolean) {

    this.selectedElement = element;

    if (details) {
      this.activeElement = element;
      this.setDataSource();
    }

    this.elementSelected.emit(false);

  }

  onBackToList() {

    this.activeElement = null;
    this.dataSource = [];

    this.elementSelected.emit(true);

  }

  setDataSource() {

    this.dataSource = [];

    const properties = {...this.translatedSchema['properties'], ...this.translatedSchema['extended']}

    for (const key in properties) {

      // if (Object.hasOwn(properties, key)) {
      if (key in properties) {


        const element = properties[key];

        if (!this.schema['title'].includes(element)) {

          let val;

          if (element === 'createdAt') {

            if (this.activeElement![element]) {
              val = this.datePipe.transform(this.activeElement![element], 'dd/MM/yyyy');
            } else {
              val = this.activeElement![element];
            }
          } else if ( element === 'startTime' || element === 'endTime' || element === 'responseDate') {
            val = this.datePipe.transform(this.activeElement![element], 'dd/MM/yyyy HH:ss');
          } else {
            val = this.activeElement![element];
          }

          this.dataSource.push({key, val});

        }

      }
    }

  }

  getStatusIcon(status: string) {

    switch (status) {
      case 'Approved':
        return 'checkmark-circle';
        break;
      case 'Pending':
        return 'time-outline';
        break;
      default:
        return 'ban';
        break;
    }

  }


  getStatusIconColor(status: string) {

    switch (status) {
      case 'Approved':
        return 'success';
        break;
      case 'Pending':
        return 'warning';
        break;
      default:
        return 'danger';
        break;
    }
  }

}
