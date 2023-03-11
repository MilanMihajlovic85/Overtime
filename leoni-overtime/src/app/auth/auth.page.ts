import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { LoadingService } from '../shared/services/loading/loading.service';
import { MessagesService } from '../shared/services/messages/messages.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  providers: [LoadingService, MessagesService]
})
export class AuthPage implements OnInit {

  readyToLogin = false;

  constructor(
    private loadingSrv: LoadingService,
    private authService: AuthService,
    private messagesSrv: MessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onPreLoginFormSubmit(form: NgForm) {

    if (!form.valid) return;

    this.loadingSrv.showLoaderUntilCompleted(
      this.authService.preLogin(form.value.employeeId).pipe(
        catchError(err => {

          console.log(err);


          let message!: string;

          if (err.error && err.error.Message && err.error.Message.includes("no exists in database")) {
            message = 'Wrong ID';
          } else if (err.name && err.status && err.statusText) {
            message = err.status + ' ' + err.statusText;
          }

          this.messagesSrv.showErrors(message);

          return throwError(() => err);
        })
      )
    ).subscribe((msg) => {
      this.readyToLogin = true;
      this.messagesSrv.showErrors(msg.split("...")[1]);
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
