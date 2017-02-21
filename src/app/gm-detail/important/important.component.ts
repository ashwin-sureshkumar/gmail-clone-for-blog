import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { EmailService } from '../../shared/services/services.module';
@Component({
  selector: 'gm-important',
  templateUrl: './important.component.html',
  styleUrls: ['./important.component.scss']
})
export class ImportantComponent implements OnInit {
  emails: Observable<Array<Object>>;

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.emails = this.emailService.getEmails('important');
  }

}
