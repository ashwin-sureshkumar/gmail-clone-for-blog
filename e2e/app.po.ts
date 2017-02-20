import { browser, element, by } from 'protractor';

export class GmailClonePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('gm-root h1')).getText();
  }
}
