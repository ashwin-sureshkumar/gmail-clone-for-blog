import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { EmailService } from '../../shared/services/services.module';

@Component({
  selector: 'gm-drafts',
  templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.scss']
})
export class DraftsComponent implements OnInit {
  emails: Observable<Array<Object>>;

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.emails = this.emailService.getEmails('drafts');
  }

}
