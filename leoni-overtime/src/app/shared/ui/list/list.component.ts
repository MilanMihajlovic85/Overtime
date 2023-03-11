import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
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

  @Output() modalOpen: EventEmitter<any> = new EventEmitter();

  isCreateBtn = false;
  btns!: {[key: string]: any}[];
  translatedSchema!: {[key: string]: any};
  activeElement!: {[key: string]: any} | undefined | null;
  selectedElement!: {[key: string]: any};
  elements!: {[key: string]: any}[];


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

  ngOnChanges(changes: SimpleChanges) {

    if (this.activeElement) {
      this.activeElement = changes['data'].currentValue!.find((u: any) => u['id'] === this.activeElement!['id']);

      if (this.activeElement) {
        this.setDataSource();
      } else {
        this.dataSource = [];
      }
    }

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

          if (element === 'createdAt' || element === 'startTime' || element === 'endTime' || element === 'responseDate') {

            if (this.activeElement![element]) {
              val = this.datePipe.transform(this.activeElement![element], 'dd/MM/yyyy');
            } else {
              val = this.activeElement![element];
            }
          } else if (element === 'updatedAt') {
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
