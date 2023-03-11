import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { MessagesService } from '../../services/messages/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {

  showMessages = false;

  errors$! : Observable<string[]>

  constructor(
    public messagesSrv: MessagesService
  ) { }

  ngOnInit(): void {

    this.errors$ = this.messagesSrv.errors$.pipe(
      tap((e) => {
        this.showMessages = true
      })
    );

  }

  onClose() {

    this.showMessages = false;
    this.messagesSrv.deleteErrors();

  }

}
