import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../../shared/services/services.module';

@Component({
  selector: 'gm-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.emailService.getEmails('social').do(console.log).subscribe();
  }

}
