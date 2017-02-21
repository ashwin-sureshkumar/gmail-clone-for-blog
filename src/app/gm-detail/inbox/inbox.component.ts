import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gm-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  inboxLinks: Array<Object> = [];

  constructor() { }

  ngOnInit() {
    this.inboxLinks = [
      {
        label: 'Primary',
        link: 'primary'
      },
      {
        label: 'Social',
        link: 'social'
      },
      {
        label: 'Promotions',
        link: 'promotions'
      }
    ];
  }

}
