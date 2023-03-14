import { DatePipe } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { RequestService } from '../../data-store/request/request.service';
import { I18nService } from '../../services/i18n/i18n.service';

@Component({
  selector: 'app-paginated-list',
  templateUrl: './paginated-list.component.html',
  styleUrls: ['./paginated-list.component.scss'],
})
export class PaginatedListComponent  implements OnInit {

  private _data!: {[key: string]: any}[];

  @Input() set data(value: {[key: string]: any}[]) {
    this._data = value;
  }

  @Input() schema!: {[key: string]: any};
  @Input() buttons: any;

  @Output() modalOpen: EventEmitter<any> = new EventEmitter();

  isCreateBtn = false;
  btns!: {[key: string]: any}[];
  translatedSchema!: {[key: string]: any};
  activeElement!: {[key: string]: any} | undefined | null;
  selectedElement!: {[key: string]: any};
  elements: {[key: string]: any}[] = [];

  url!: string;
  itemListData = [];
  page_number = 1;
  page_limit = 13;


  dataSource: {[key: string]: string | number}[] = [];
  value = '';

  constructor(
    private datePipe: DatePipe,
    private i18n: I18nService,
    private requestSrv: RequestService
  ) { }

  ngOnInit() {

    if ('create' in this.buttons) {
      this.isCreateBtn = true;
      delete this.buttons.create;
    }

    this.btns = Object.values(this.buttons);

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

    this.getElements(false, "");

  }

  get data() {
    return this._data;
  }

  getElements(isFirstLoad: boolean, event: any) {

    this.url = '?_page=' + this.page_number + '&_limit=' + this.page_limit;

    this.requestSrv.getMyRequestsPaginated(this.url).pipe(

    ).subscribe(resData => {

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

  }

  onBackToList() {
    this.activeElement = null;
    this.dataSource = [];
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


}
