import { browser, element, by } from 'protractor';

export class UdemyAngular210appsAuth0Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
