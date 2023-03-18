import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { catchError, throwError } from 'rxjs';
import { LoadingService } from '../shared/services/loading/loading.service';
import { MessagesService } from '../shared/services/messages/messages.service';
import { SignalrService } from '../shared/services/signalr/signalr.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  providers: [LoadingService, MessagesService]
})
export class AuthPage implements OnInit {

  readyToLogin = false;

  focusIsSet!: boolean;

  constructor(
    private loadingSrv: LoadingService,
    private authService: AuthService,
    private messagesSrv: MessagesService,
    private router: Router,
    private signalrSrv: SignalrService
  ) { }

  ngOnInit() {
  }

  onPreLoginFormSubmit(form: NgForm) {

    if (!form.valid) return;

    this.loadingSrv.showLoaderUntilCompleted(
      this.authService.preLogin(form.value.employeeId).pipe(
        catchError(err => {

          if (err.error.Message) {
            if (err.error.Message.includes("no exists in database")) {
              this.messagesSrv.showErrors('Wrong ID');
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

}
