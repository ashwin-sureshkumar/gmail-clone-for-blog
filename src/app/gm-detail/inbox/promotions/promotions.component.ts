import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../../shared/services/services.module';
@Component({
  selector: 'gm-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.emailService.getEmails('promotions').do(console.log).subscribe();
  }

}
