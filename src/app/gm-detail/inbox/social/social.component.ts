import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../../shared/services/services.module';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'gm-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  emails: Observable<Array<Object>>;

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.emails = this.emailService.getEmails('social');
  }

}
