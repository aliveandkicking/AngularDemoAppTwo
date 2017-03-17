import { AngularDemoAppTwoPage } from './app.po';

describe('angular-demo-app-two App', () => {
  let page: AngularDemoAppTwoPage;

  beforeEach(() => {
    page = new AngularDemoAppTwoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
