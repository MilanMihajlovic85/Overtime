import { DatePipe } from '@angular/common';
import { Component, ChangeDetectorRef, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { I18nService } from '../../services/i18n/i18n.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent  implements OnInit {

  private _data!: {[key: string]: any}[];

  @Input() set data(value: {[key: string]: any}[]) {
    this._data = value;
  }

  @Input() schema!: {[key: string]: any};
  @Input() buttons: any;
  @Input() hideSearch: boolean = false;
  @Input() showDetail: boolean = true;


  @Output() modalOpen: EventEmitter<any> = new EventEmitter();
  @Output() elementSelected: EventEmitter<boolean> = new EventEmitter();

  isCreateBtn = false;
  btns!: {[key: string]: any}[];
  translatedSchema!: {[key: string]: any};
  activeElement!: {[key: string]: any} | undefined | null;
  selectedElement!: {[key: string]: any};
  elements: {[key: string]: any}[] = [];

  showTimeInterval = false;
  showStatusIcon = false;
  statusIcon!: string;

  dataSource: {[key: string]: string | number}[] = [];
  value = '';


  constructor(
    private datePipe: DatePipe,
    private i18n: I18nService
  ) { }

  ngOnInit() {

    if ('create' in this.buttons) {
      this.isCreateBtn = true;
      delete this.buttons.create;
    }

    this.btns = Object.values(this.buttons);

    this.showStatusIcon = this.schema['properties'].includes('status') && this.schema['title'][0] === 'requestorForProject';
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

    this.getElements();

  }

  ngOnChanges(changes: SimpleChanges) {

    if (this.activeElement) {
      this.activeElement = changes['data'].currentValue!.find((u: any) => u['id'] === this.activeElement!['id']);

      if (this.activeElement) {
        this.setDataSource();
      } else {
        this.dataSource = [];
      }
    }

    this.elements = [];
    this.getElements();

  }

  get data() {
    return this._data;
  }

  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();

    this.elements = this.data.filter(element => {

        let retEl;

        for (const [key, value] of Object.entries(element)) {

          if (
            key !== 'id' &&
            key !== 'createdAt' &&
            key !== 'startTime' &&
            key !== 'endTime' &&
            key !== 'responseDate' &&
            value &&
            typeof value === 'string' &&
            value!.toLowerCase().includes(filterValue)) {
              retEl = element;
          }
        }
        return retEl;

    });

  }

  clearSearchInput() {

    this.value = '';
    this.elements = this.data;

  }

  openModal(modal: string, data: any) {

    this.modalOpen.emit({modal, data, mobile: true});

  }

  onSelectElement(element: {[key: string]: any}, details?: boolean) {

    if (this.showDetail) {

      this.selectedElement = element;

      if (details) {
        this.activeElement = element;
        this.setDataSource();
      }

      this.elementSelected.emit(false);

    }

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
            val = this.datePipe.transform(this.activeElement![element], 'dd/MM/yyyy HH:mm');
          } else {
            val = this.activeElement![element];
          }

          this.dataSource.push({key, val});

        }

      }
    }

  }

  getElements() {

    const count = this.elements.length;

    for (let i = 0; i < 13; i++) {
      if (this.elements.length < this.data.length) {
        this.elements.push(this.data[count + i]);
      }
    }

  }

  doInfinite(event: any) {

    this.getElements();

    event.target.complete();

  }

  getStatusIcon(status: string) {

    switch (status) {
      case 'Approved':
        return 'checkmark-circle-outline';
        break;
      case 'Pending':
        return 'time-outline';
        break;
      default:
        return 'ban-outline';
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
