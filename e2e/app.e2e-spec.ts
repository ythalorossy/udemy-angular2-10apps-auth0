import { UdemyAngular210appsAuth0Page } from './app.po';

describe('udemy-angular2-10apps-auth0 App', function() {
  let page: UdemyAngular210appsAuth0Page;

  beforeEach(() => {
    page = new UdemyAngular210appsAuth0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
