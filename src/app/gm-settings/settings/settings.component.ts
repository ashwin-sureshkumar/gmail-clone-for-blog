import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gm-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  settingLinks: Array<Object> = [];

  constructor() { }

  ngOnInit() {
    this.settingLinks = [
      {
        label: 'General',
        link: 'general'
      },
      {
        label: 'Accounts',
        link: 'accounts'
      },
      {
        label: 'Chat',
        link: 'chat'
      },
      {
        label: 'Inbox',
        link: 'inbox',
      },
      {
        label: 'Labels',
        link: 'labels',
      },
      {
        label: 'Themes',
        link: 'themes'
      },
      {
        label: 'Labs',
        link: 'labs'
      },
    ];
  }
}
