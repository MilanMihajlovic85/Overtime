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

  errors$: Observable<string[]> = this.messagesSrv.errors$.pipe(
    tap(errprs => this.showMessages = errprs.length > 0)
  );

  constructor(
    public messagesSrv: MessagesService
  ) { }

  ngOnInit(): void {}

  onClose() {

    this.showMessages = false;
    this.messagesSrv.deleteErrors();

  }

}
