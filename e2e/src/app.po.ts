import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    browser.sleep(2000);
    return element(by.className('home_title')).getText();
  }
  getParagraphText() {
    browser.sleep(2000);
    return element(by.css('app-root h1')).getText();
  }
  clickMenu() {
    browser.sleep(2000);
    element(by.className('bar_hidden')).click();

  }
  clickLogin() {
    browser.sleep(2000);
    return element(by.cssContainingText('ul li a', 'Login')).click();
  }
  getLoginText() {
    browser.sleep(2000);
    return element(by.className('login_text'));
  }
}
