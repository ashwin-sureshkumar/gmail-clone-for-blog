import { GmailClonePage } from './app.po';

describe('gmail-clone App', () => {
  let page: GmailClonePage;

  beforeEach(() => {
    page = new GmailClonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('gm works!');
  });
});
