import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { take, tap } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  hubUrl = 'http://localhost:2078/API/signalr';
  private connection: any;

  constructor(
    private authSrv: AuthService
  ) { }

  public createConnection() {

    return this.authSrv.apiKey.pipe(
      take(1),
      tap(token => {

        console.log(token);
        if (token) {
          this.connection = new signalR.HubConnectionBuilder()
          .withUrl('http://localhost:2078/API/signalr', {
            accessTokenFactory: () => token
          })
          .withAutomaticReconnect()
          .build()

        this.connection.start()
          .catch((error: any) => console.log(error));

        this.connection.received((text: any) => {
          console.log(text);

        })
        }

      })
    );

  }

  stopConnection() {

    this.connection.stop().catch((error: any) => console.log(error));
  }
}
