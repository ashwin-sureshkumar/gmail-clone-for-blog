import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../../shared/services/services.module';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'gm-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.scss']
})
export class PrimaryComponent implements OnInit {
  emails: Observable<Array<Object>>;

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.emails = this.emailService.getEmails('primary');
  }

}
