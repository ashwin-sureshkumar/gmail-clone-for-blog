import { Injectable } from '@angular/core';
const mockEmails = {
  'primary': require('../../../mocks/json/primary.json'),
  'promotions': require('../../../mocks/json/promotions.json'),
  'social': require('../../../mocks/json/social.json'),
  'starred': require('../../../mocks/json/starred.json'),
  'important': require('../../../mocks/json/important.json'),
  'sent': require('../../../mocks/json/sent.json'),
  'drafts': require('../../../mocks/json/drafts.json'),
  'trash': require('../../../mocks/json/trash.json')
};

import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmailService {

  constructor() { }

  getEmails(section: string) {
    return Observable.of(mockEmails.hasOwnProperty(section) ? mockEmails[section] : []);
  }
}
