import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../../shared/services/services.module';

@Component({
  selector: 'gm-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.scss']
})
export class PrimaryComponent implements OnInit {

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.emailService.getEmails('primary').do(console.log).subscribe();
  }

}
