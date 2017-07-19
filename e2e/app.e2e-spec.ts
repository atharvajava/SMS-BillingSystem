import { SmsBillPage } from './app.po';

describe('sms-bill App', () => {
  let page: SmsBillPage;

  beforeEach(() => {
    page = new SmsBillPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
