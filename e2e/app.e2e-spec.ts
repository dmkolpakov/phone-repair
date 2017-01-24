import { PhoneRepairPage } from './app.po';

describe('phone-repair App', function() {
  let page: PhoneRepairPage;

  beforeEach(() => {
    page = new PhoneRepairPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
