import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { catchError, throwError } from 'rxjs';
import { I18nService } from '../shared/services/i18n/i18n.service';
import { LoadingService } from '../shared/services/loading/loading.service';
import { MessagesService } from '../shared/services/messages/messages.service';
import { ScreensizeService } from '../shared/services/screen-size/screen-size.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  providers: [LoadingService, MessagesService]
})
export class AuthPage implements OnInit {

  @ViewChildren('inputs') inputs!: QueryList<ElementRef>;


  language!: string;
  readyToLogin = false;

  focusIsSet!: boolean;

  constructor(
    public platform: Platform,
    private loadingSrv: LoadingService,
    private authService: AuthService,
    private messagesSrv: MessagesService,
    private router: Router,
    private translate: TranslateService,
    private i18n: I18nService,
    private changeDetector: ChangeDetectorRef
  ) {
    i18n.language().subscribe(language => {
      translate.use(language);
      this.language = language;
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    this.inputs.changes.subscribe((d) => {
      this.inputs.first.nativeElement.focus();
      this.changeDetector.detectChanges();
    });

  }

  onPreLoginFormSubmit(form: NgForm) {

    if (!form.valid) return;

    this.loadingSrv.showLoaderUntilCompleted(
      this.authService.preLogin(form.value.employeeId).pipe(
        catchError(err => {

          if (err.error.Message) {
            if (err.error.Message.includes("no exists in database")) {
              this.messagesSrv.showErrors(this.translate.instant('errors.wrongId'));
            } else {
              this.messagesSrv.showErrors(err.error.Message);
            }

          } else if (err.status && err.statusText) {
            const message = err.status + ' ' + err.statusText;
            this.messagesSrv.showErrors(message);
          } else {
            this.messagesSrv.showErrors(err.message);
          }

          return throwError(() => err);
        })
      )
    ).subscribe((msg) => {

      this.readyToLogin = true;
      this.messagesSrv.deleteErrors();

      this.inputs.last.nativeElement.focus();

      // this.messagesSrv.showErrors(msg.split("...")[1]);
    });


  }

  onSubmit(form: NgForm) {

    if (!form.valid) return;

    this.loadingSrv.showLoaderUntilCompleted(
      this.authService.login(form.value.code).pipe(
        catchError(err => {

          let message!: string;

          if (err.error && err.error.Message) {
            message = err.error.Message;
          } else if (err.name && err.status && err.statusText) {
            message = err.status + ' ' + err.statusText;
          }

          this.messagesSrv.showErrors(message);

          return throwError(() => err);
        })
      )
    ).subscribe(() => {
      this.router.navigateByUrl('/');
      form.reset();
    });

  }

  changeLanguage(lng: string) {

    this.language = lng;

    this.i18n.setLanguage(lng);
    this.translate.use(lng)

  }

}
