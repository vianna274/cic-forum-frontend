import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('WELCOME TO CiC FORUM');
  });

  it('should go to login page', () => {
    page.navigateTo();
    page.clickMenu();
    page.clickLogin();
    expect(page.getLoginText().getText()).toEqual('Already have an account? Sign in.');
  });
});
