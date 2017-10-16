import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  isVisible() {
    return element(by.className('datepicker__calendar__nav')).isDisplayed();
  }

  clickToOpen() {
    return element(by.name('testDate')).click();
  }
}
