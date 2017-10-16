import { AppPage } from './app.po';

describe('angular-mat-datepicker App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should open the calendar on click', () => {
    page.navigateTo();
    page.clickToOpen()
    expect(page.isVisible()).toBeTruthy();
  });
});
