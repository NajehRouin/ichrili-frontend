import { WkgroceryPage } from './app.po';

describe('wkgrocery App', () => {
  let page: WkgroceryPage;

  beforeEach(() => {
    page = new WkgroceryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
