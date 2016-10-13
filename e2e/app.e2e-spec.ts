import { LetsmeetAngularUiPage } from './app.po';

describe('letsmeet-angular-ui App', function() {
  let page: LetsmeetAngularUiPage;

  beforeEach(() => {
    page = new LetsmeetAngularUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
