import { Component, Input } from '@angular/core';

@Component({
  selector: 'gm-email-list-item',
  templateUrl: './email-list-item.component.html',
  styleUrls: ['./email-list-item.component.scss']
})
export class EmailListItemComponent {

  @Input()
  email: Object;

  constructor() { }

}
