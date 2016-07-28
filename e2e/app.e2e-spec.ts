import { AngularMaterializeTestPage } from './app.po';

describe('angular-materialize-test App', function() {
  let page: AngularMaterializeTestPage;

  beforeEach(() => {
    page = new AngularMaterializeTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
