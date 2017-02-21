import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { EmailService } from '../../shared/services/services.module';
@Component({
  selector: 'gm-starred',
  templateUrl: './starred.component.html',
  styleUrls: ['./starred.component.scss']
})
export class StarredComponent implements OnInit {
  emails: Observable<Array<Object>>;

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.emails = this.emailService.getEmails('starred');
  }

}
