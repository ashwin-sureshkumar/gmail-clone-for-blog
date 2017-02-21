import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { EmailService } from '../../shared/services/services.module';
@Component({
  selector: 'gm-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss']
})
export class SentComponent implements OnInit {
  emails: Observable<Array<Object>>;

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.emails = this.emailService.getEmails('sent');
  }

}
