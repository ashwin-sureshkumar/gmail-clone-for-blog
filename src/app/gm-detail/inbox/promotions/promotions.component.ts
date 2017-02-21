import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../../shared/services/services.module';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'gm-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {
  emails: Observable<Array<Object>>;

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.emails = this.emailService.getEmails('promotions');
  }

}
