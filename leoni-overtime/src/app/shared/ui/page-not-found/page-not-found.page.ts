import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18nService } from '../../services/i18n/i18n.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.page.html',
  styleUrls: ['./page-not-found.page.scss']
})
export class PageNotFoundPage {

  constructor(
    private translate: TranslateService,
    private i18n: I18nService
  ) {
    i18n.language().subscribe(language => translate.use(language));
  }

}
